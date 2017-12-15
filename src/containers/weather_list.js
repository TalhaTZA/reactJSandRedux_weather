import React , {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
    render(){
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(C)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData){
        
        const name=cityData.city.name;
        const temp=cityData.list.map(data=> data.main.temp-275.15);
        const pressure=cityData.list.map(data=>data.main.pressure);
        const humidity=cityData.list.map(data=>data.main.humidity);
        return(
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temp} color='orange' units='C' /></td>
                <td><Chart data={pressure} color='black' units=' hPa' /></td>
                <td><Chart data={humidity} color='red' units='%'/></td>
            </tr>
        );
    }
}

function mapStateToProps({weather}){
    return {
        weather  
    };
}

export default connect(mapStateToProps)(WeatherList);