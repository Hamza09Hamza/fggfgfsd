import React, { Component } from 'react';
import Getmovies  from './file';
class Counter extends Component {
    state={
        movies:Getmovies()
    }
    Deletemovie(id){ 
        this.state.movies=this.state.movies.filter( (movie) => {
          if(movie._id===id) {
            return false
          }
          else { return true}  
        })
        console.log(this.state.movies)
        this.render()
      }
    render() { 
        return   (
        <div  id='table'>
            <h1> there is {this.state.movies.length.toString()}  in the database</h1>
            <table>
                <thead>
                    < td className='title' > Title</ td >
                    < td className='nothing' >Genre</ td >
                    < td className='nothing' > stock</ td >
                    < td className='nothing' > Rate</ td >
                    < td className='nothing' ></td>
                </thead>
                <tbody>
                {this.state.movies.map( 
                    movie => <tr>
                        <td className='title'>{movie.title}</td>
                        <td className='nothing'> {movie.genre.name}</td>
                        <td className='nothing'>{movie.numberInStock}</td>
                        <td className='nothing'>{movie.dailyRentalRate}</td>
                        <td className='nothing'><button onClick={()=> this.Deletemovie(movie._id)} className='buttondelete'> Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        ) ;
    }
}
export default Counter ;