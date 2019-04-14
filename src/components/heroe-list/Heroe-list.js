import React, { Component } from 'react';
import HeroeCard from '../heroe-card/Heroe-card';
import HeroesService from '../../services/heroes-service';
import './Heroe-list.scss';

class HeroeList extends Component {
    state = {
        keyword: '',
        heroes: []
    }
    handleValueChange = (e) => {
        this.setState({ keyword: e.target.value });
        setTimeout(
            function() {
                this.getHeroes();
            }
            .bind(this), 1200
        );
    }
    getHeroes = () => {
        HeroesService.getHeroes(this.state.keyword).then(
            res => {
                this.setState({
                    heroes: res.map(heroe => {
                        return {
                            id: heroe['id'],
                            thumbnail: heroe['thumbnail']['path'] + '.' + heroe['thumbnail']['extension'],
                            name: heroe['name'],
                            description: heroe['description']
                        }
                    })
                });
            }
        ).catch(err => { console.err(err) });
    }

    render() {
        return ( 
            <section className="heroes">
                <nav>
                    <input type="text" onChange={ this.handleValueChange }/> 
                    <button onClick={ this.getHeroes }>
                        <svg width="12px" height="12px" x="0px" y="0px" viewBox="0 0 1000 1000" fill="#fff">
                            <g><path d="M932.8,850l-201-201c56.4-67.6,90.3-154.5,90.3-249.5C822.2,184.2,647.9,10,432.7,10C217.4,10,43.2,184.2,43.2,399.5C43.2,614.7,217.4,789,432.7,789c61.1,0,119-14.1,170.5-39.1c3,4.7,6.6,9.1,10.7,13.2l203,203c32,32,84,32,116,0C964.8,934,964.8,882,932.8,850z M125.2,399.5C125.2,229.7,262.9,92,432.7,92s307.5,137.7,307.5,307.5c0,169.8-137.8,307.5-307.5,307.5C262.9,707,125.2,569.3,125.2,399.5z"/></g>
                        </svg>
                    </button>
                </nav> 
                <div> {
                    this.state.heroes.length > 0 
                    ? this.state.heroes.map(heroe => {
                        return <HeroeCard key={ heroe.id } heroe={ heroe }/> }) 
                    : <p>No items found</p> } 
                </div> 
            </section>
            );
        }
    }

    export default HeroeList;