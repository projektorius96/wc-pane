import './implementation/main.js';
import package_json from './package.json' with { type: 'json' };

document.on('DOMContentLoaded', ()=>{
    document.title = package_json.name;
});