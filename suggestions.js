class SearchSuggestionSystem {
    constructor(products) {
        this.products = [...products].sort();
    }

    getSuggestions(searchWord) {
        const suggestions = [];
        let prefix = '';
        
        for (const char of searchWord) {
            prefix += char;
            const idx = this.lowerBound(this.products, prefix);
            const currentSuggestions = [];

            for (let i = idx; i < Math.min(idx + 3, this.products.length); i++) {
                if (this.products[i].startsWith(prefix)) {
                    currentSuggestions.push(this.products[i]);
                } else {
                    break;
                }
            }
            suggestions.push(currentSuggestions);
        }
        return suggestions;
    }

    lowerBound(arr, target) {
        let left = 0;
        let right = arr.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}

const products = ["glass","sand","sandgravels","wood","sacement"];
const searchWord = "sand";
const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));
