/**
 * Class responsible for generating the readme file for the server application.
 */
class ReadmeGenerator {
  /**
   * Generates the content for the readme file.
   *
   * @returns {string} - The generated readme file content as a string.
   */
  public static readme(): string {
    let codeReadme = `# Project Name

Project generated using a backend generator from metadata in a PostgreSQL database using the TypeORM library. Developed by Luis Chaparro and Juan Pablo Robles.
    
## Installation
    
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run 'npm install' to install all dependencies.
    
## Usage
    
1. Set up necessary environment variables.
2. Run 'npm run dev' to start the server in development mode.
3. If you need to build the project for production, run 'npm run build'.
4. To start the server in production, run 'npm start'.
5. The server will be available at [http://localhost:3123](http://localhost:3123).
    
## Dependencies
    
- Node.js
- Express
- TypeORM
- PostgreSQL
    
## License
    
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    return codeReadme;
  }
}
export default ReadmeGenerator;
