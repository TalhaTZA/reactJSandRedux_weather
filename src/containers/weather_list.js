import React , {Componet} from 'react';

class WeatherList extends Componet{
    render(){
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                    </tr>
                </thead>
            </table>
        );
    }
}

export default WeatherList;