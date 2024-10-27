import { useEffect, useState } from "react";

interface PasswordMetaObject {
    alphabet?: boolean;
    number?: boolean;
    specialCharacter?: boolean;
    length: number; // length should be required
}

type PasswordGenFn = (data: PasswordMetaObject) => string;

const usePasswordGenerator: PasswordGenFn = (data) => {
    // console.log(data)
    const [finalPassword, setPassword] = useState<string>("");

    // Password generation function
    const passwordGenerate = (options: PasswordMetaObject): string => {
        const { alphabet: containsAlphabet, number: containsNumbers, specialCharacter: containsSpecialCharacters, length } = options;

        const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialCharacters = "!@#$%^&*()_+-=[]{}|;':,.<>?";

        // Build the character pool based on user options
        let passwordString = "";

        if (containsAlphabet) {
            passwordString = alphabets;
        }

        if (!containsAlphabet && !containsNumbers && !containsSpecialCharacters) {
            passwordString = alphabets;
        }

        if (containsNumbers && !containsSpecialCharacters) {
            passwordString += numbers;
        }

        if (containsSpecialCharacters && !containsNumbers) {
            passwordString += specialCharacters;
        }

        if (containsSpecialCharacters && containsNumbers) {
            passwordString += specialCharacters + numbers;
        }
        let finalPassword = "";

        for (let i = 0; i < length; i++) {
            const stringIndex = Math.floor(Math.random() * passwordString.length);
            finalPassword += passwordString.charAt(stringIndex);
        }

        
        return finalPassword;
    };

    useEffect(() => {
        const password = passwordGenerate(data);
        // console.log(password)
        setPassword(password);
    }, [data]);

    return finalPassword;
};

export default usePasswordGenerator;
