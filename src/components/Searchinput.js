import React, {useEffect, useState, useRef} from 'react'
import './Searchinput.css'

function Searchinput() {

    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    useEffect(() => {
        const pokemon = [];
        const promises = new Array(20).fill().map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
        Promise.all(promises).then(pokemonArr => {
            return pokemonArr.map(value => 
                value.json().then(({name, sprites: {front_default: sprite}}) =>
                    pokemon.push({name, sprite})
                )
            );
        });
        setOptions(pokemon);
    }, []);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const {current: wrap} = wrapperRef;
        if(wrap && !wrap.contains(event.target)){
            setDisplay(false);
        }
    };

    const updatePokeDex = poke => {
        console.log("gdd");
        setSearch(poke);
        setDisplay(false);
    }
        
    return (
        <div className="search-container">
            <div ref={wrapperRef} className="auto-Container"> 
                <div className="search-input">
                    <input 
                        id="auto" 
                        onClick={(event)=> {!(event.target.value==="") && setDisplay(!display)}} 
                        placeholder="What are you looking for?"
                        value={search}
                        onChange={event => {
                            setSearch(event.target.value); 
                            event.target.value==="" ? setDisplay(false) : setDisplay(true)
                            // !(event.target.value==="") && setDisplay(true);
                            console.log(search);
                        }}
                    />
                    <button ></button>
                </div>
                {display && (
                    <div className="optionContainer">
                        {options
                            .filter(({name})=> name.indexOf(search.toLocaleLowerCase()) > -1)
                            .map((value, index) => {
                                return (
                                    <div
                                        onClick={() => updatePokeDex(value.name)}
                                        className="option"
                                        key={index}
                                        tabIndex="0"
                                    >
                                        <span>{value.name}</span>
                                        <img src={value.sprite} alt="pokemon" />
                                    </div>
                                );
                            })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Searchinput
