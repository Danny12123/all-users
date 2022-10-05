// import React, {useState} from 'react';
// import "./App.css";

// const UploadImage = () => {
//     const [profiles, setProfiles] = useState("./logo512.png");

//     // const {profiles} = setProfiles("");
//     const imageHandler = (e) => {
//         // console.log(setProfiles(e.target.value))
//         const reader = new FileReader();
//         reader.onload = () => {
//             if (reader.readyState === 2 ) {
//                 setProfiles({profiles: reader.result})
//             }
//         }
//         reader.readAsDataURL(e.target.files[0])
//     }
//   return (
//     <div id='page'>
//       <div className='page_img'>
//         <h2>Add your Image</h2>
//         <div className='img-holder'>
//             <img src={profiles} alt="" id='img' className='img'/>
//         </div> 
//         <input type="file" name='image-upload' id='input-img' accept="image/*" onChange={imageHandler}/>
//         <div className='img_label'>
//             <label htmlFor='input-img' className="image-upload">
//                 <h3>add photo</h3> Pick you photo
//             </label>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UploadImage
