import React from 'react';
import './Detail.css';
import Badge from 'react-bootstrap/Badge'

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if (location.state){
            const {year, title, summary, poster, genres} = location.state
            return (
                <div className="movie__detail">
                    <table>
                        <tr>
                            <td><img src={poster} alt={title} title={title} /></td>
                            <td>
                                <div className="movie__detail__data">
                                <h3 className="movie__detail__title">{title}</h3>
                                <h5 className="movie__detail__year">{year}</h5>
                                <ul className="movie__detail__genres">
                                {genres.map((genre, index) => {
                                    if(genre === "Crime") {
                                        return (
                                            <li className="movie__detail__genre" key={index}>
                                                    <Badge pill variant="danger">{genre}</Badge>
                                            </li>
                                        );
                                    }
                                    else {
                                        return (
                                            <li className="movie__detail__genre" key={index}>
                                                    <Badge pill variant="primary">{genre}</Badge>
                                            </li>
                                        );
                                    }
                                
                                })}
                                </ul>
                                <div className="summary__box">
                                    <p className="movie__detail_summary">{summary}</p>
                                </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </div>
            );
        }
        else {
            return null;
        }
        
    }
}
export default Detail;