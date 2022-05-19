class CustomStringMethods {
    filter(input, filter, outputType) {

        let filtered = '';
        let filtrate = '';

        for(let c = 0; c < input.length; c++) {
            if(filter.includes(input[c])) {
                filtered += input[c];
            } else {
                filtrate += input[c];
            }
        }

        return {
            raw_data: input,
            filtered: outputType.toLowercase() == 's'? filtered : filtered.split(),
            filtrate: outputType.toLowercase() == 's'? filtrate: filtrate.split(),
        }
    }

    isOnlyAlpha(input, allowSpace = true, skip = false) {
        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑabcdefghijklmnopqrstuvwxyzñ";
        let only_alpha = true;
        for(let c = 0; c < input.length; c++) {
            if((input[c] == " " && allowSpace) || (skip && skip.includes(input[c]))) continue;
            if(!alpha.includes(input[c])) {
                only_alpha = false;
                break;
            } 
        }

        return only_alpha;
    }

    isOnlyNumeric(input, allowSpace = true, skip = false) {
        let only_numeric = true;
        for(let c = 0; c < input.length; c++) {
            if((input[c] == " " && allowSpace) || (skip && skip.includes(input[c]))) continue;
            if(Number.isNaN(Number(input[c])) || (input[c] == " " && !allowSpace)) {
                only_numeric = false;
                break;
            } 
        }

        return only_numeric;
    }

    abbreviation(txt, is_uppercase = false) {
        let output = ''; 
        const av_arr = txt.split(' ');

        av_arr.forEach((item) => {
            output += item[0];
        })

        return is_uppercase? output.toUpperCase() : output.toLowerCase();
    }

}

export default new CustomStringMethods;