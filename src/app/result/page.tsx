// 'use client'

// import { use, useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { type BaziResultData, type BaziPublicResultData } from '../../types/bazi';
// import ResultHeader from '../../components/ResultHeader/ResultHeader';
// import {BaziPaipan, BaziDetail} from '../../components/ResultPaipan/ResultPaipan';
// import {BaziLiupan, BaziDayun} from '../../components/ResultLiupan/ResultLiupan';
// import ResultButtons from '../../components/ResultButtons/ResultButtons';
// import { useAuth } from '../../contexts/AuthContext';

// export default function ResultPage() {
//   const { token, loading, user } = useAuth();
//   const [activeTab, setActiveTab] = useState('bazi'); // New state to manage active tab

//   const searchParams = useSearchParams();
//   const resultId = searchParams.get('id');
//   const isAuthenticated = searchParams.get('auth') === '1';
//   // const token = isAuthenticated ? localStorage.get('token') : null;
//   const [fetchedResult, setFetchedResult] = useState<BaziPublicResultData | null>(null);

//   useEffect(() => {
//     if (!loading && user) {
//       console.log('User:', user);
//       console.log('Token:', token);
//     }
//   }, [loading, user]);

//   useEffect(() => {
//     if (!resultId) {
//       return;
//     }

//     // fetch data from database
//     async function fetchResultById(id: string) {
//       try {
//         // Perform the GET request
//         const response = await fetch(`http://localhost:8000/v1/result/${id}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
    
//         // Check if the response is successful
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
    
//         // Parse the response as JSON
//         const data = await response.json();
    
//         // Log or use the response data
//         console.log('Result fetched by id: ', data);
//         return data; // Return the data if needed
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     // fetch data from database
//     async function fetchUserResultById(id: string) {
//       try {
//         console.log('fetching user result by id, token:', token);
//         // Perform the GET request
//         const response = await fetch(`http://localhost:8000/v1/user/result/${id}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`, // Attach token in Authorization header
//           },
//         });
    
//         // Check if the response is successful
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
    
//         // Parse the response as JSON
//         const data = await response.json();
    
//         // Log or use the response data
//         console.log('Result fetched by id: ', data);
//         return data; // Return the data if needed
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     async function handleFetchResult() { 
//       try {
//         const resultData = await fetchResultById(resultId);
//         setFetchedResult(resultData);
//       } catch (error) {
//         console.error("Error:", error);
//       } finally {
//         // window.history.replaceState({}, document.title, window.location.pathname); // Clear query params from the URL
//       }
//     }

//     async function handleFetchUserResult() {
//       try {
//         const resultData = await fetchUserResultById(resultId);
//         setFetchedResult(resultData);
//       } catch (error) {
//         console.error("Error:", error);
//       } finally {
//         // window.history.replaceState({}, document.title, window.location.pathname); // Clear query params from the URL
//       }
//     }

//     isAuthenticated ? handleFetchUserResult() : handleFetchResult();

//   }, [resultId, token]);

//   // for debugging
//   if (!fetchedResult) {
//     return <div>Loading...</div>;
//   }

//   const name = fetchedResult.name.toString();
//   const birthYear: string = fetchedResult.birth_year.toString();
//   const birthMonth: string = fetchedResult.birth_month.toString();
//   const birthDay: string = fetchedResult.birth_day.toString();
//   const birthHour: string = fetchedResult.birth_hour.toString();
//   const birthMinute: string = fetchedResult.birth_minute.toString();
//   const result: BaziResultData = fetchedResult.result;

//   // convert local date to lunar date
//   const { Lunar, Solar } = require('lunar-javascript');
//   const solar = Solar.fromYmd(birthYear, birthMonth, birthDay);
//   const lunar = solar.getLunar();
//   const lunarYear = lunar.getYear();
//   const lunarMonth = lunar.getMonth();
//   const lunarDay = lunar.getDay();

//   // get the result from the query string
//   const { baziSizhu, baziDayun, baziCesuan, baziLiuyue } = result; 

//   // extract the bazi sizhu and bazi cesuan
//   const { nianzhu, yuezhu, rizhu, shizhu } = baziSizhu;
//   const { jiaoyun, dayunGanZhi, dayunAge, dayunStart, dayunNianzhu } = baziDayun;
//   const { rizhu_detail, personality_detail } = baziCesuan;

//   // extract the stem and branch for each pillar
//   const yearStem = nianzhu[0];
//   const yearBranch = nianzhu[1];
//   const monthStem = yuezhu[0];
//   const monthBranch = yuezhu[1];
//   const dayStem = rizhu[0];
//   const dayBranch = rizhu[1];
//   const hourStem = shizhu[0];
//   const hourBranch = shizhu[1];

//   return (

//     <div className="flex flex-col text-center rounded-3xl bg-foreground text-background">
//       <ResultHeader name={name} birthYear={birthYear} birthMonth={birthMonth} birthDay={birthDay} birthHour={birthHour} birthMinute={birthMinute} lunarYear={lunarYear} lunarMonth={lunarMonth} lunarDay={lunarDay} />

//       <div className="grid grid-cols-6">
        
//         <div className="col-span-1 my-8 flex flex-col items-stretch space-y-4 ml-8">
//           <ResultButtons activeTab={activeTab} setActiveTab={setActiveTab} />
//         </div>

//         <div className="col-span-5 my-8 mr-4">
//         {activeTab === 'bazi' ? (
//           <BaziPaipan
//               yearStem={yearStem}
//               yearBranch={yearBranch}
//               monthStem={monthStem}
//               monthBranch={monthBranch}
//               dayStem={dayStem}
//               dayBranch={dayBranch}
//               hourStem={hourStem}
//               hourBranch={hourBranch}
//             />)
//             : (
//           <BaziLiupan
//             yearStem={yearStem}
//             yearBranch={yearBranch}
//             monthStem={monthStem}
//             monthBranch={monthBranch}
//             dayStem={dayStem}
//             dayBranch={dayBranch}
//             hourStem={hourStem}
//             hourBranch={hourBranch}
//               />
//             )}
//         </div>
//       </div>

//       <div className="mt-8">
//         {activeTab === 'bazi' ? (
//           <div className="mx-8 my-4">
//             <BaziDetail rizhu_detail={rizhu_detail} personality_detail={personality_detail} />
//           </div>
//         ) : (
//           <div className="mx-8 my-4">
//               <BaziDayun jiaoyun={jiaoyun} dayunGanZhi={dayunGanZhi.slice(0, 8)} dayunAge={dayunAge.slice(0, 8)} dayunStart={dayunStart.slice(0, 8)} dayunNianzhu={JSON.stringify(dayunNianzhu)} baziLiuyue={baziLiuyue} /> 
//           </div>
//         )}
//       </div>
//       </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { type BaziResultData, type BaziPublicResultData } from '../../types/bazi';
import ResultHeader from '../../components/ResultHeader/ResultHeader';
import { BaziPaipan, BaziDetail } from '../../components/ResultPaipan/ResultPaipan';
import { BaziLiupan, BaziDayun } from '../../components/ResultLiupan/ResultLiupan';
import ResultButtons from '../../components/ResultButtons/ResultButtons';
import { useAuth } from '../../contexts/AuthContext';

export default function ResultPage() {
  const { token, loading, user } = useAuth();
  const [activeTab, setActiveTab] = useState('bazi'); // New state to manage active tab

  const searchParams = useSearchParams();
  const resultId = searchParams.get('id');
  const isAuthenticated = searchParams.get('auth') === '1';
  const [fetchedResult, setFetchedResult] = useState<BaziPublicResultData | null>(null);

  useEffect(() => {
    if (!loading && user) {
      console.log('User:', user);
      console.log('Token:', token);
    }
  }, [loading, user]);

  useEffect(() => {
    if (!resultId) {
      return;
    }

    // Fetch data based on authentication status
    const fetchResult = async () => {
      try {
        let response;

        if (isAuthenticated && token) {
          console.log('Fetching user result by id with token:', token);
          // Authenticated request
          response = await fetch(`http://localhost:8000/v1/user/result/${resultId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, // Attach token in Authorization header
            },
          });
        } else {
          // Public request
          response = await fetch(`http://localhost:8000/v1/result/${resultId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Result fetched by id: ', data);
        setFetchedResult(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch result only if not loading and token is available (for authenticated)
    if (!loading && (isAuthenticated ? token : true)) {
      fetchResult();
    }
  }, [resultId, isAuthenticated, token, loading]);

  // for debugging
  if (!fetchedResult) {
    return <div>Loading...</div>;
  }

  const name = fetchedResult.name.toString();
  const birthYear: string = fetchedResult.birth_year.toString();
  const birthMonth: string = fetchedResult.birth_month.toString();
  const birthDay: string = fetchedResult.birth_day.toString();
  const birthHour: string = fetchedResult.birth_hour.toString();
  const birthMinute: string = fetchedResult.birth_minute.toString();
  const result: BaziResultData = fetchedResult.result;

  // convert local date to lunar date
  const { Lunar, Solar } = require('lunar-javascript');
  const solar = Solar.fromYmd(birthYear, birthMonth, birthDay);
  const lunar = solar.getLunar();
  const lunarYear = lunar.getYear();
  const lunarMonth = lunar.getMonth();
  const lunarDay = lunar.getDay();

  // get the result from the query string
  const { baziSizhu, baziDayun, baziCesuan, baziLiuyue } = result;

  // extract the bazi sizhu and bazi cesuan
  const { nianzhu, yuezhu, rizhu, shizhu } = baziSizhu;
  const { jiaoyun, dayunGanZhi, dayunAge, dayunStart, dayunNianzhu } = baziDayun;
  const { rizhu_detail, personality_detail } = baziCesuan;

  // extract the stem and branch for each pillar
  const yearStem = nianzhu[0];
  const yearBranch = nianzhu[1];
  const monthStem = yuezhu[0];
  const monthBranch = yuezhu[1];
  const dayStem = rizhu[0];
  const dayBranch = rizhu[1];
  const hourStem = shizhu[0];
  const hourBranch = shizhu[1];

  return (
    <div className="flex flex-col text-center rounded-3xl bg-foreground text-background">
      <p>token: {token}</p>
      <ResultHeader name={name} birthYear={birthYear} birthMonth={birthMonth} birthDay={birthDay} birthHour={birthHour} birthMinute={birthMinute} lunarYear={lunarYear} lunarMonth={lunarMonth} lunarDay={lunarDay} />

      <div className="grid grid-cols-6">
        <div className="col-span-1 my-8 flex flex-col items-stretch space-y-4 ml-8">
          <ResultButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="col-span-5 my-8 mr-4">
          {activeTab === 'bazi' ? (
            <BaziPaipan
              yearStem={yearStem}
              yearBranch={yearBranch}
              monthStem={monthStem}
              monthBranch={monthBranch}
              dayStem={dayStem}
              dayBranch={dayBranch}
              hourStem={hourStem}
              hourBranch={hourBranch}
            />
          ) : (
            <BaziLiupan
              yearStem={yearStem}
              yearBranch={yearBranch}
              monthStem={monthStem}
              monthBranch={monthBranch}
              dayStem={dayStem}
              dayBranch={dayBranch}
              hourStem={hourStem}
              hourBranch={hourBranch}
            />
          )}
        </div>
      </div>

      <div className="mt-8">
        {activeTab === 'bazi' ? (
          <div className="mx-8 my-4">
            <BaziDetail rizhu_detail={rizhu_detail} personality_detail={personality_detail} />
          </div>
        ) : (
          <div className="mx-8 my-4">
            <BaziDayun jiaoyun={jiaoyun} dayunGanZhi={dayunGanZhi.slice(0, 8)} dayunAge={dayunAge.slice(0, 8)} dayunStart={dayunStart.slice(0, 8)} dayunNianzhu={JSON.stringify(dayunNianzhu)} baziLiuyue={baziLiuyue} />
          </div>
        )}
      </div>
    </div>
  );
}
