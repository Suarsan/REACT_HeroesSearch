import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = '0932aade315ac7c0bfc3664a940ab603';
const PRIVATE_KEY = 'f730d9ffc02a95ddae1f87409079ab724ad8bf83';

const getHeroes = (keyword) => {
    return new Promise(
        (resolve, reject) => {
            const ts = new Date().getTime();
            const keywordParam = keyword ? `&nameStartsWith=${keyword}` : '';
            axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&hash=${md5Digest(ts)}&ts=${ts}${keywordParam}`)
                .then(res => {
                    if ((res['status'] === 200) && (res['data']['data']['results'])) {
                        resolve(res['data']['data']['results']);
                    }
                    reject(null)
                })
                .catch(err => {
                    reject(err);
                });
        }
    )
}

const md5Digest = (ts) => {
    return md5(ts + PRIVATE_KEY + PUBLIC_KEY);
}

const HeroesService = { getHeroes };

export default HeroesService;