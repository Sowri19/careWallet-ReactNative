# careWallet

The code is present in visits branch

You might get lot of error when you run the code for the first time because you have to install libraries. Take the help the chatgpt to install them. We are using node js and React for backend and frontend.

Steps to run the application:

---------------------------Backend--------------------------------

1. Run the Backend 
  -- cd Backend
 -- node app.js


2. Inorder to access your backend through postman

To send the `patientID` and `doctorID` in Postman, you can use the `Body` tab to create a `raw` request with a JSON payload. Here's a step-by-step guide:

1. Open Postman.

2. Set the HTTP method to `POST`.

3. Enter the URL of your API endpoint. For example, if your API is running locally, the URL might be `http://localhost:3000/visits`.

4. Select the `Body` tab.

5. Choose the `raw` option.

6. Set the content type to `application/json`.

7. In the text area, enter the JSON payload with `patientID` and `doctorID`. For example:

   json
   {
     "patientID": "your_patient_id_here",
     "doctorID": "your_doctor_id_here"
   }
   

   Replace `"your_patient_id_here"` and `"your_doctor_id_here"` with the actual patient and doctor IDs you want to test.

8. Click the `Send` button to make the request.

This way, you're sending a JSON payload in the request body with the necessary `patientID` and `doctorID` values. Adjust the values based on your actual patient and doctor IDs.

3. Get Method --> http://localhost:3000/patients/
Will give list of all patients from the database

4.Get Method --> http://localhost:3000/patients/"patientid"
If you give the patientid it will retrive data of a particular patient

5.Get Method --> http://localhost:3000/doctors/"doctorid"
If you give the doctorid it will retrive data of a particular doctor



---------------------------Frontend--------------------------------

Ignore the code present in frontend folder. Our Frontend is present in healthcare-app 


B. If you want I have created Frontend which just displays list of all patients in the database. You can modify the code according to your requirement

--  cd healthcare-app 
-- cd src
-- npm start (to start your react Application)
