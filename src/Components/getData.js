// import React, {useEffect, useState} from 'react'
// import axios from 'axios'

// const Data = () => {
//  const [data, setData] = useState()

//  useEffect(() => {
//   axios('https://parseapi.back4app.com/classes/Cellphonedataset_Cell_Phone_Models_By_Brand?count=1&limit=0',
//           {
//             headers: {
//               'X-Parse-Application-Id': 'QP4wJLPjrToM2SVDpbkOYSeaaqVFF6EviCVVTye4', // This is your app's application id
//               'X-Parse-REST-API-Key': 'U74fSXnH3yRd5JnHzXGzTkoTNRnVIVGiVJhqU5Xc', // This is your app's REST API key
//             }
//           }).then(res => {
//    setData(res.data)
//   } ).catch(error => {
//    console.error("Error Fetching Data")
//   } )

//  }, [])
//  return (
//   <div>
//    {console.log(data)}
//   </div>
//  )
// }

// export default Data
