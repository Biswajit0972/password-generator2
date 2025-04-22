import { useEffect, useState } from "react";

interface PasswordMetaObject {
    alphabet?: boolean;
    number?: boolean;
    specialCharacter?: boolean;
    length: number; // length should be required
}


const alphabets = "fBkIWwqDxKQRJcMCpmVHsolXbZUGzaFgYjydnNrLOhEutTeAvSiP";
const numbers = "72940183657018294365";
const specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

const usePasswordGenerator = (data: PasswordMetaObject):string => {
    const [finalPassword, setFinalPassword] = useState<string>("");

    useEffect(() => {
        const password = generatePassword(data);

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
    }else if (!rules.alphabet && rules.number && rules.specialCharacter) {
        passwordIngredients = numbers + specialCharacters;
    }else if (rules.alphabet && !rules.number && rules.specialCharacter) {
        passwordIngredients = alphabets + specialCharacters;
    }else if (rules.alphabet && rules.number && !rules.specialCharacter) {
        passwordIngredients = alphabets + numbers;
    }else if (rules.alphabet && !rules.number && !rules.specialCharacter) {
        passwordIngredients = alphabets;
    }else if (rules.alphabet ) {
        passwordIngredients = alphabets ;
    }else if (rules.specialCharacter) {
        passwordIngredients = specialCharacters ;
    } else if (rules.number) {
        passwordIngredients = numbers ;
    }
   

    let finalPassword = "";


    for (let i = 0; i < rules.length; i++) {
        const indexNumber = Math.floor(Math.random() * passwordIngredients.length);

        finalPassword += passwordIngredients.charAt(indexNumber);
    }

    return finalPassword
}

export const checkPasswordValid = (password: string):string => {

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+[\]{}|;:'",.<>?/`~]/.test(password);
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
