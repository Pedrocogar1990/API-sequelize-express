const app = require('./app/app');
const port = process.env.PORT || 3000; //leera el puerto indicado en el .env o directament usara el 3000

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})