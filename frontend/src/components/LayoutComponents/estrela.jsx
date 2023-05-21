import React from 'react'
//import ReactDOM from 'react-dom'

const Estrela = ({ nota, setNota }) => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(nota)
    return (
        <div className=" d-flex flex-column align-items-center">
            <h4 className='text-white'>Avalie</h4>

            <fieldset class="rating">
                {values.map(value => {
                    return (
                        <i
                            onClick={() => setNota(value)}
                            style={parseInt(nota) >= value ? { color: 'yellow' } : {}}
                            className='estrela bi bi-star-fill'
                        />
                    )
                })}
            </fieldset>

        </div>
    )
}

export default Estrela;