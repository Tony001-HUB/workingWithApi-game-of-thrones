
export default class GoTServise{
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url){

        const response = await fetch(`${this._apiBase}${url}`);
    
        if(!response.ok){
            throw new Error(`невозможно получить ${url}, статус: ${response.status}`)
        }
    
        return await response.json();
    }

    getAllCharacters = async() => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }
    
    getBook = async(id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    getAllHouses = async () =>  {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }
    
    getHouse = async (id) => {
        const house = this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

      
    isNull = (data) =>{
        if(data){
            return data;
        }else{
            return data = 'Data is empty :(';
        }
    }

    _transformCharacter = (character) =>{
        return{
            name: this.isNull(character.name),
            gender: this.isNull(character.gender),
            born: this.isNull(character.born), 
            died: this.isNull(character.died),
            culture: this.isNull(character.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.isNull(house.name),
            region: this.isNull(house.region),
            words: this.isNull(house.words),
            titles: this.isNull(house.titles),
            ancestralWeapons: this.isNull(house.ancestralWeapons)
        };
    }
    
    _transformBook = (book) => {
        return {
            name: this.isNull(book.name),
            numberOfPages: this.isNull(book.numberOfPages),
            publisher: this.isNull(book.publisher),
            released: this.isNull(book.released)
        };
    }

}
