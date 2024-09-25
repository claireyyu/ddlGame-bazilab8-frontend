import { useState, useEffect } from 'react';
import {majorTimezones} from './TimezoneData';
import moment from 'moment-timezone';
import BaziResult from './BaziResult';


export default function BaziCalculator() {
    const [isSubmitting, setIsSubmitting] = useState(false);


    // Generate list of major timezones with UTC offset
    const timezones = majorTimezones.map((tz) => {
        const offset = moment.tz(tz.value).format('Z');
        return { label: `${tz.label} (UTC${offset})`, value: tz.value };
    });
    
    // State to store form fields
    const [formData, setFormData] = useState({
        name: '',
        sex: '',
        birthDate: '',
        birthTime: '',
        birthPlace: ''
    });

    // State to store response data
    const [result, setResult] = useState('');

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable button and change text

        // Combine birth date and time, and convert to Beijing time
        const birthDateTime = moment.tz(`${formData.birthDate} ${formData.birthTime}`, formData.timezone);
        const beijingTime = birthDateTime.clone().tz('Asia/Shanghai');
    
        const bodyData = {
            name: formData.name,
            sex: formData.sex,
            type: 1, // Assuming type is always 1 (gongli)
            year: beijingTime.year(),
            month: beijingTime.month() + 1, // getMonth is zero-based, so add 1
            day: beijingTime.date(),
            hours: beijingTime.hours(),
            minute: beijingTime.minutes()
        };
    
        try {
            const URL1 = 'http://127.0.0.1:8000/v1/paipan';
            const URL2 = 'http://127.0.0.1:8000/v1/cesuan';
    
            const [response1, response2] = await Promise.all([
                fetch(URL1, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyData)
                }),
                fetch(URL2, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyData)
                })
            ]);
    
            if (response1.ok && response2.ok) {
                const data1 = await response1.json();
                const data2 = await response2.json();
    
                const combinedData = {
                    debug: data1.original.debug,
                    nianzhu: data1.original.nianzhu,
                    yuezhu: data1.original.yuezhu,
                    rizhu: data1.original.rizhu,
                    shizhu: data1.original.shizhu,
                    big_start_year: data1.original.big_start_year,
                    personality_detail: data2.original.personality_detail,
                    rizhu_detail: data2.original.rizhu_detail,
                };
    
                setResult(JSON.stringify(combinedData));

            } else {
                const errorData1 = await response1.text();
                const errorData2 = await response2.text();
                setResult(`Failed to fetch data: ${errorData1}, ${errorData2}`);
            }
        } catch (error) {
            setResult(`Error: ${error.message || 'Failed to fetch'}`);
        } finally {
            setIsSubmitting(false); // Enable button and change text
        }
    };

    return (
        <div className="w-full">
          <form className="flex flex-col gap-4 p-4 md:p-8 bg-background shadow-md rounded-md mx-4 md:mx-16" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="name" className="p-2 md:w-1/3">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                className="p-2 rounded-3xl flex-1 border border-gray-300"
                onChange={handleChange} 
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="sex" className="p-2 md:w-1/3">Gender</label>
              <select 
                name="sex" 
                id="sex" 
                className="p-2 rounded-3xl flex-1 border border-gray-300" 
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="birthDate" className="p-2 md:w-1/3">Birth Date</label>
              <input 
                type="date" 
                name="birthDate" 
                id="birthDate" 
                className="p-2 rounded-3xl flex-1 border border-gray-300" 
                onChange={handleChange} 
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="birthTime" className="p-2 md:w-1/3">Birth Time</label>
              <input 
                type="time" 
                name="birthTime" 
                id="birthTime" 
                className="p-2 rounded-3xl flex-1 border border-gray-300" 
                onChange={handleChange} 
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="timezone" className="p-2 md:w-1/3">Timezone</label>
              <select 
                name="timezone" 
                id="timezone" 
                className="p-2 rounded-3xl flex-1 border border-gray-300" 
                onChange={handleChange}
              >
                <option value="">Select Timezone</option>
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>{tz.label}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-center mt-4">
              <button 
                type="submit" 
                className="cursor-pointer bg-sky-600 text-white px-10 py-2 rounded-2xl font-bold transition-colors hover:bg-sky-500 disabled:bg-gray-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Calculating...' : 'Generate'}
              </button>
            </div>
          </form>
          {result && (
            <div className="mt-8 mx-4 md:mx-16">
              <BaziResult result={result} />
            </div>
          )}
        </div>
      );
}
