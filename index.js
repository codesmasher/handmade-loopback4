const application = require('./dist'); // Obtener todos los archivos en el directorio

module.exports = application;

if (require.main === module) {
    // Objeto de configuración de la aplicación
    const config = {
        rest: {
            port: +(process.env.PORT || 3030),
            host: process.env.HOST,
            openApiSpec: {
                setServersFromRequest: true,
            },
        },
    };
    // Inicia la aplicación
    application.main(config).catch(err => {
        console.error('Cannot start the application', err);
        process.exit(1);
    });
}