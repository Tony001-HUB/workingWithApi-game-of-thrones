class GotService{
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

        async getResurse(url){
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };

    async getAllCharacters() {
        const res = await this.getResurse(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    async getCharacter(id){
        const character = await this.getResurse(`/characters/${id}`);
        return (this._transformCharacter(character));
    }

    async getAllHouses(){
        const res = await this.getResurse(`/houses/`);
        return res.map(this._transformCharacter);
    }

    async getHouses(id){
        const hous = await this.getResurse(`/houses/${id}/`);
        this._transformCharacter(hous);
    }

    async getAllBooks(){
        const res = await this.getResurse(`/books/`);
        return res.map(this._transformCharacter);
    }

    async getBooks(id){
        const book = await this.getResurse(`/books/${id}/`);
        this._transformCharacter(book);
    }

    isDataNull(data){
        if(data){
            return data;
        }else{
            return "No data found";
        }
    }


    _transformCharacter = (character) =>{
        return {
            name: this.isDataNull(character.name),
            gender: this.isDataNull(character.gender),
            born: this.isDataNull(character.born),
            died: this.isDataNull(character.died),
            culture: this.isDataNull(character.culture)
        }
    }

    _transformHouse(house){
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons

        }
    }

    _transformBook(book){
        return{
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }


}

export default GotService;