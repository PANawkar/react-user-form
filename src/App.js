import { useState } from 'react';
import './App.css';
import './index.css'

function App() {
  const [formData, setformData] =useState( {firstName:"",lastName:"", email:"", country:"", streetADD:"", city:"", state:"", zipcode:"", box1:false, box2: false, box3:false, mode:""} );

  function changeHandler(event){
   
    const {name, value, checked, type} =event.target;
    setformData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("print all enteries in form");
    console.log(formData);
  }

  return (
    <div className='justify-center flex max-w-[700]'>
      <form onSubmit={submitHandler}>
      <div >
      <div className='font-medium'>First Name :</div>
      <input className='border w-[50vw] mx-auto rounded-sm'
      type='text'
      onChange={changeHandler}
      name='firstName'
      value={formData.firstName}
      placeholder='Pratik'
      />
      </div>

      <div>
      <div className='font-medium'>Last Name :</div>
      <input className='border w-[50vw] mx-auto rounded-sm'
      type='text'
      onChange={changeHandler}
      name='lastName'
      value={formData.lastName}
      placeholder='Nawkar'
      />
      </div>
      
      <div>
        <div className='font-medium'>Email :</div>
        <input className='border w-[50vw] mx-auto rounded-sm'
        type='email'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        placeholder='pratiknawkar94@gmail.com'
        />
      </div>

      <div>
        <div className='font-medium' >Country :</div>
        <select
        name='country'
        id='country'
        onChange={changeHandler}
        className='border w-[50vw] mx-auto rounded-sm'
        value={formData.id}
        >
          <option value="India">India</option>
          <option value="Russia">Russia</option>
          <option value="Israel">Israel</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>

        </select>
      </div>

      <div>
        <div className='font-medium'>Street Address :</div>
        <input className='border w-[50vw] mx-auto rounded-sm'
        type='text'
        onChange={changeHandler}
        name='streetADD'
        value={formData.streetADD}
        placeholder='Sawata Chowk'
        />
      </div>

      <div>
        <div className='font-medium'>City :</div>
        <input className='border w-[50vw] mx-auto rounded-sm'
        type='text'
        onChange={changeHandler}
        name='city'
        value={formData.city}
        placeholder='Shegaon'
        />
      </div>

      <div>
        <div className='font-medium'>State/Province :</div>
        <input className='border w-[50vw] mx-auto rounded-sm'
        type='text'
        onChange={changeHandler}
        name='state'
        value={formData.state}
        placeholder='Maharashtra'
        />
      </div>

      <div>
        <div className='font-medium'>ZIP/ Postal code :</div>
        <input className='border w-[50vw] mx-auto rounded-sm'
        type='number' 
        onChange={changeHandler}
        name='zipcode'
        value={formData.zipcode}
        placeholder='444203'
        />
      </div>

      <div>
        <div className='font-medium'>By Email</div>
        <div className='font-medium'>
          <input type='checkbox'
          name='box1'
          id='box1'
          onChange={changeHandler}
          checked={formData.box1}
          >
          </input>
          Comments
          <br/>
          <p className='font-normal' >Get notified when someone posts a comment on a posting. </p>
        </div>

        <div className='font-medium'>
          <input type='checkbox'
          name='box2'
          id='box2'
          onChange={changeHandler}
          checked={formData.box2}
          >
          </input>
          Candidates
          <br/>
          <p className='font-normal'>Get notified when a candidate apply for a job. </p>
        </div>

        <div className='font-medium'>
          <input type='checkbox'
          name='box3'
          id='box3'
          onChange={changeHandler}
          checked={formData.box3}
          >
          </input>
          Offers
          <br/>
          <p className='font-normal'>Get notified when a candidate accepts or reject an offer. </p>
        </div>

      </div>

      <div>
        <div className='font-medium'>
          Push Notifications
          <p className='font-normal'>These are delivered via SMS to your mobile phone</p>
        </div>

        <div className='font-medium'>
          <input 
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Everything"
          id='Everything'
          checked={formData.mode==="Everything"}
          >
          </input>
          <label htmlFor='Everything'>Everything</label>
        </div>

        <div className='font-medium'>
        <input 
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Same as Email"
          id='Same as Email'
          checked={formData.mode==="Same as Email"}
          >
          </input>
          <label htmlFor='Same as Email'>Same as Email</label>
        </div>

        <div className='font-medium'>
        <input 
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="No push Notifcation"
          id='No push Notifcation'
          checked={formData.mode==="No push Notifcation"}
          >
          </input>
          <label htmlFor='No push Notifcation'>No push Notifcation</label>
        </div>
      </div>
      <br/>
      <button className='border rounded-sm w-20 font-medium bg-blue-500 text-white hover:bg-blue-700'>Save</button>
      </form>
    </div>
  );
}

export default App;
