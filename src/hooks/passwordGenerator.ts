import { useEffect, useState } from "react";

interface PasswordMetaObject {
    alphabet?: boolean;
    number?: boolean;
    specialCharacter?: boolean;
    length: number; // length should be required
}


const alphabets = "fBkIWwqDxKQRJcMCpmVHsolXbZUGzaFgYjydnNrLOhEutTeAvSiP";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

const usePasswordGenerator = (data: PasswordMetaObject):string => {
    const [finalPassword, setFinalPassword] = useState<string>("");
    // console.log(data);
    useEffect(() => {
        const password = generatePassword(data);
        console.log(password);
        if (password) {
            setFinalPassword(password);
        }
    }, [data])

    return finalPassword;
}

const generatePassword = (rules: PasswordMetaObject): string => {


    let passwordIngredients = "";

    if ((!rules.alphabet && !rules.number && !rules.specialCharacter) || (rules.alphabet && rules.number && rules.specialCharacter)) {
        passwordIngredients = alphabets + numbers + specialCharacters;
    }

    if (!rules.alphabet && rules.number && rules.specialCharacter) {
        passwordIngredients = numbers + specialCharacters;
    }

    if (rules.alphabet && !rules.number && rules.specialCharacter) {
        passwordIngredients = alphabets + specialCharacters;
    }

    if (rules.alphabet && rules.number && !rules.specialCharacter) {
        passwordIngredients = alphabets + numbers;
    }

    if (rules.alphabet && !rules.number && !rules.specialCharacter) {
        passwordIngredients = alphabets;
    }
   

    let finalPassword = "";
    console.log(passwordIngredients);
    for (let i = 0; i < rules.length; i++) {
        const indexNumber = Math.floor(Math.random() * passwordIngredients.length);
        console.table(indexNumber);
        finalPassword += passwordIngredients.charAt(indexNumber);
    }

    return finalPassword
}

export const checkPasswordValid = (password: string):string => {

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/`~]/.test(password);
    const passwordLength = password.length;

    //  console.log(hasUpperCase, hasLowerCase,  hasNumber, hasSpecialChar);

    if ((hasLowerCase && hasNumber && hasSpecialChar && hasUpperCase) &&( passwordLength >= 8 && passwordLength <= 10)) {
        return "Medium"
    }

    if ((hasLowerCase && hasNumber && hasSpecialChar && hasUpperCase) &&( passwordLength >= 10 && passwordLength <= 50)) {
        return "Strong"
    }

   return "low";
}

export default usePasswordGenerator;
