import React, {useState} from 'react'
import {AuthForm} from '../Components/Forms';
import {RegisterReqest} from '../Services/users-service'
export function Register() {
  return (
        <div style={{textAlign: "center"}}>
            <AuthForm onSubmit={({email, fullName, userName, password, confirmPassword}) => {
                console.log({email, fullName, userName, password, confirmPassword});
                RegisterReqest({email, fullName, userName, password})
        }}/>
        </div>
        )
}
;


