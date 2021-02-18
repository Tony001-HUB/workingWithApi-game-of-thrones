
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

    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    async getCharacter(id){
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
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

}
