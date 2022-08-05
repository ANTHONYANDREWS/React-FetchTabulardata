import React, {useState, useEffect} from 'react'

const userinfo = async() => {
    const res = await fetch(
        "https://randomuser.me/api/?results=20"
    )
    const { results: user } = await res.json();
    
    return user;
}

function FetchTabulardata() {

    const[randomuser, setRandomUser] = useState([]);

    useEffect(()=>{
        userinfo().then((user)=>{
            setRandomUser(user)
        })
    },[])

  return (
    <>
      {randomuser.map((user,id)=>(
                <div key={user.id}>
                <h1>{id+1}. {Object.values(user.name).join(" ")}</h1>
                <img src={user.picture.medium}/>
            </div>
            )
        )
      }
    </>
  )
}

export default FetchTabulardata
