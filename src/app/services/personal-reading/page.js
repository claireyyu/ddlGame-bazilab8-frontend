import personalReadingPic from "../../../../public/personal-reading.png";
import Image from 'next/image'

export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-16 mt-12 text-foreground">
      <Image src={personalReadingPic} alt="Service" className="cursor-pointer" />
      

      <div className="flex flex-col gap-8 mx-4 md:mx-16 divide-y-2 divide-solid">
        <div>
          <p className="text-base md:text-lg m-2">
          Are you seeking guidance on your career, relationships, or other life challenges? Receive a personalized reading delivered straight to your inbox within one business day. Our service offers quick and insightful answers to your pressing questions, using time-honored Chinese methods.
            <br /><br />
            Standard Price: USD 45<br />Promo Price: USD 9.9
            <br /><br />
            Payment Method:
            <br /><br />
            PayPal
            <br />WeChat
            <br />AliPay
            <br /><br />

            {/*How it works*/}
            How It Works:
            <br /><br />
            1. Purchase:<br />Make your payment via PayPal, WeChat, or Alipay.
            <br />2. Email Us:<br />Send an email to xxx@gmail.com with your payment reference number or a screenshot of the transaction.
            <br />3. Prepare Your Question:<br />Meditate on your question for 3 minutes.
            <br />Provide three integer numbers (between 1-999) along with your question.
            <br />Optional: You can also include background information for a more thorough interpretation.
            <br />4. Restrictions:<br />We do not address questions related to medical health, death, or legal matters.
            <br />5. Receive Your Answer:<br/>Your reading will be emailed to you within one business day. Please check your spam or junk folder if you don't see it in your inbox.
            {/*Note*/}
            <br /><br />
            Note: This is a written service conducted exclusively via email. Your privacy is our priority—all readings are conducted with complete confidentiality.
          </p>
        </div>

        {/* <div>
          <p className="text-lg md:text-xl m-4">AFTER PURCHASE:</p>
          <ol className="list-decimal flex flex-col m-4 text-base md:text-lg">
            <li>Email Us: Send an email to: xxx@hotmail.com Include your PayPal, WeChat, or Alipay reference number or screenshot.</li>
            <li>Prepare Your Question: Meditate on the question you want to ask for 3 minutes, then provide 3 integer numbers (1-999), along with your question.</li>
            <li>You may also include background information for a more detailed interpretation. Restrictions: Please note that we cannot answer questions related to medical health, death, or lawsuit.</li>
            <li>Receive Your Answer: After receiving your information, we will prepare your reading and send the answer to your email within 1 business day.</li>
          </ol>
        </div>

        <p className="text-sm md:text-base">
          Note: Everything is conducted via email, and nothing is shipped out physically.
        </p> */}
      </div>
    </div>
  );
}
