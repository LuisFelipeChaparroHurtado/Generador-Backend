/**
 * Class responsible for generating the content for the `package-lock.json` file.
 */
class PackageLockGenerator {
  /**
   * Generates the content for the `package-lock.json` file.
   *
   * @returns {string} - The generated `package-lock.json` file content as a string.
   */
    public static packageLock(): string {
      let codePackageLock = `{	
        "name": "Backend",	
        "version": "1.0.0",	
        "lockfileVersion": 3,	
        "requires": true,	
        "packages": {	
          "": {	
            "name": "Backend",	
            "version": "1.0.0",	
            "license": "ISC",	
            "dependencies": {	
              "cors": "^2.8.5",	
              "express": "^4.18.2",	
              "morgan": "^1.10.0",	
              "pg": "^8.11.3",	
              "reflect-metadata": "^0.1.13",	
              "typeorm": "^0.3.17"	
            },	
            "devDependencies": {	
              "@types/cors": "^2.8.14",	
              "@types/express": "^4.17.19",	
              "@types/morgan": "^1.9.6",	
              "@types/node": "^20.8.4",	
              "concurrently": "^8.2.2",	
              "dotenv": "^16.3.1",	
              "nodemon": "^3.0.1",	
              "ts-node-dev": "^2.0.0"	
            }	
          },	
          "node_modules/@babel/runtime": {	
            "version": "7.23.2",	
            "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.23.2.tgz",	
            "integrity": "sha512-mM8eg4yl5D6i3lu2QKPuPH4FArvJ8KhTofbE7jwMUv9KX5mBvwPAqnV3MlyBNqdp9RyRKP6Yck8TrfYrPvX3bg==",	
            "dependencies": {	
              "regenerator-runtime": "^0.14.0"	
            },	
            "engines": {	
              "node": ">=6.9.0"	
            }	
          },	
          "node_modules/@cspotcode/source-map-support": {	
            "version": "0.8.1",	
            "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",	
            "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",	
            "devOptional": true,	
            "dependencies": {	
              "@jridgewell/trace-mapping": "0.3.9"	
            },	
            "engines": {	
              "node": ">=12"	
            }	
          },	
          "node_modules/@jridgewell/resolve-uri": {	
            "version": "3.1.2",	
            "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",	
            "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",	
            "devOptional": true,	
            "engines": {	
              "node": ">=6.0.0"	
            }	
          },	
          "node_modules/@jridgewell/sourcemap-codec": {	
            "version": "1.4.15",	
            "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",	
            "integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==",	
            "devOptional": true	
          },	
          "node_modules/@jridgewell/trace-mapping": {	
            "version": "0.3.9",	
            "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",	
            "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",	
            "devOptional": true,	
            "dependencies": {	
              "@jridgewell/resolve-uri": "^3.0.3",	
              "@jridgewell/sourcemap-codec": "^1.4.10"	
            }	
          },	
          "node_modules/@sqltools/formatter": {	
            "version": "1.2.5",	
            "resolved": "https://registry.npmjs.org/@sqltools/formatter/-/formatter-1.2.5.tgz",	
            "integrity": "sha512-Uy0+khmZqUrUGm5dmMqVlnvufZRSK0FbYzVgp0UMstm+F5+W2/jnEEQyc9vo1ZR/E5ZI/B1WjjoTqBqwJL6Krw=="	
          },	
          "node_modules/@tsconfig/node10": {	
            "version": "1.0.11",	
            "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz",	
            "integrity": "sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==",	
            "devOptional": true	
          },	
          "node_modules/@tsconfig/node12": {	
            "version": "1.0.11",	
            "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",	
            "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",	
            "devOptional": true	
          },	
          "node_modules/@tsconfig/node14": {	
            "version": "1.0.3",	
            "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",	
            "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",	
            "devOptional": true	
          },	
          "node_modules/@tsconfig/node16": {	
            "version": "1.0.4",	
            "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",	
            "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",	
            "devOptional": true	
          },	
          "node_modules/@types/body-parser": {	
            "version": "1.19.3",	
            "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.3.tgz",	
            "integrity": "sha512-oyl4jvAfTGX9Bt6Or4H9ni1Z447/tQuxnZsytsCaExKlmJiU8sFgnIBRzJUpKwB5eWn9HuBYlUlVA74q/yN0eQ==",	
            "dev": true,	
            "dependencies": {	
              "@types/connect": "*",	
              "@types/node": "*"	
            }	
          },	
          "node_modules/@types/connect": {	
            "version": "3.4.36",	
            "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.36.tgz",	
            "integrity": "sha512-P63Zd/JUGq+PdrM1lv0Wv5SBYeA2+CORvbrXbngriYY0jzLUWfQMQQxOhjONEz/wlHOAxOdY7CY65rgQdTjq2w==",	
            "dev": true,	
            "dependencies": {	
              "@types/node": "*"	
            }	
          },	
          "node_modules/@types/cors": {	
            "version": "2.8.14",	
            "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.14.tgz",	
            "integrity": "sha512-RXHUvNWYICtbP6s18PnOCaqToK8y14DnLd75c6HfyKf228dxy7pHNOQkxPtvXKp/hINFMDjbYzsj63nnpPMSRQ==",	
            "dev": true,	
            "dependencies": {	
              "@types/node": "*"	
            }	
          },	
          "node_modules/@types/express": {	
            "version": "4.17.19",	
            "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.19.tgz",	
            "integrity": "sha512-UtOfBtzN9OvpZPPbnnYunfjM7XCI4jyk1NvnFhTVz5krYAnW4o5DCoIekvms+8ApqhB4+9wSge1kBijdfTSmfg==",	
            "dev": true,	
            "dependencies": {	
              "@types/body-parser": "*",	
              "@types/express-serve-static-core": "^4.17.33",	
              "@types/qs": "*",	
              "@types/serve-static": "*"	
            }	
          },	
          "node_modules/@types/express-serve-static-core": {	
            "version": "4.17.37",	
            "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.17.37.tgz",	
            "integrity": "sha512-ZohaCYTgGFcOP7u6aJOhY9uIZQgZ2vxC2yWoArY+FeDXlqeH66ZVBjgvg+RLVAS/DWNq4Ap9ZXu1+SUQiiWYMg==",	
            "dev": true,	
            "dependencies": {	
              "@types/node": "*",	
              "@types/qs": "*",	
              "@types/range-parser": "*",	
              "@types/send": "*"	
            }	
          },	
          "node_modules/@types/http-errors": {	
            "version": "2.0.2",	
            "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.2.tgz",	
            "integrity": "sha512-lPG6KlZs88gef6aD85z3HNkztpj7w2R7HmR3gygjfXCQmsLloWNARFkMuzKiiY8FGdh1XDpgBdrSf4aKDiA7Kg==",	
            "dev": true	
          },	
          "node_modules/@types/mime": {	
            "version": "1.3.3",	
            "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.3.tgz",	
            "integrity": "sha512-Ys+/St+2VF4+xuY6+kDIXGxbNRO0mesVg0bbxEfB97Od1Vjpjx9KD1qxs64Gcb3CWPirk9Xe+PT4YiiHQ9T+eg==",	
            "dev": true	
          },	
          "node_modules/@types/morgan": {	
            "version": "1.9.6",	
            "resolved": "https://registry.npmjs.org/@types/morgan/-/morgan-1.9.6.tgz",	
            "integrity": "sha512-xfKogz5WcKww2DAiVT9zxMgrqQt+Shq8tDVeLT+otoj6dJnkRkyJxMF51mHtUc3JCPKGk5x1EBU0buuGpfftlQ==",	
            "dev": true,	
            "dependencies": {	
              "@types/node": "*"	
            }	
          },	
          "node_modules/@types/node": {	
            "version": "20.8.4",	
            "resolved": "https://registry.npmjs.org/@types/node/-/node-20.8.4.tgz",	
            "integrity": "sha512-ZVPnqU58giiCjSxjVUESDtdPk4QR5WQhhINbc9UBrKLU68MX5BF6kbQzTrkwbolyr0X8ChBpXfavr5mZFKZQ5A==",	
            "devOptional": true,	
            "dependencies": {	
              "undici-types": "~5.25.1"	
            }	
          },	
          "node_modules/@types/qs": {	
            "version": "6.9.8",	
            "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.8.tgz",	
            "integrity": "sha512-u95svzDlTysU5xecFNTgfFG5RUWu1A9P0VzgpcIiGZA9iraHOdSzcxMxQ55DyeRaGCSxQi7LxXDI4rzq/MYfdg==",	
            "dev": true	
          },	
          "node_modules/@types/range-parser": {	
            "version": "1.2.5",	
            "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.5.tgz",	
            "integrity": "sha512-xrO9OoVPqFuYyR/loIHjnbvvyRZREYKLjxV4+dY6v3FQR3stQ9ZxIGkaclF7YhI9hfjpuTbu14hZEy94qKLtOA==",	
            "dev": true	
          },	
          "node_modules/@types/send": {	
            "version": "0.17.2",	
            "resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.2.tgz",	
            "integrity": "sha512-aAG6yRf6r0wQ29bkS+x97BIs64ZLxeE/ARwyS6wrldMm3C1MdKwCcnnEwMC1slI8wuxJOpiUH9MioC0A0i+GJw==",	
            "dev": true,	
            "dependencies": {	
              "@types/mime": "^1",	
              "@types/node": "*"	
            }	
          },	
          "node_modules/@types/serve-static": {	
            "version": "1.15.3",	
            "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.3.tgz",	
            "integrity": "sha512-yVRvFsEMrv7s0lGhzrggJjNOSmZCdgCjw9xWrPr/kNNLp6FaDfMC1KaYl3TSJ0c58bECwNBMoQrZJ8hA8E1eFg==",	
            "dev": true,	
            "dependencies": {	
              "@types/http-errors": "*",	
              "@types/mime": "*",	
              "@types/node": "*"	
            }	
          },	
          "node_modules/@types/strip-bom": {	
            "version": "3.0.0",	
            "resolved": "https://registry.npmjs.org/@types/strip-bom/-/strip-bom-3.0.0.tgz",	
            "integrity": "sha512-xevGOReSYGM7g/kUBZzPqCrR/KYAo+F0yiPc85WFTJa0MSLtyFTVTU6cJu/aV4mid7IffDIWqo69THF2o4JiEQ==",	
            "dev": true	
          },	
          "node_modules/@types/strip-json-comments": {	
            "version": "0.0.30",	
            "resolved": "https://registry.npmjs.org/@types/strip-json-comments/-/strip-json-comments-0.0.30.tgz",	
            "integrity": "sha512-7NQmHra/JILCd1QqpSzl8+mJRc8ZHz3uDm8YV1Ks9IhK0epEiTw8aIErbvH9PI+6XbqhyIQy3462nEsn7UVzjQ==",	
            "dev": true	
          },	
          "node_modules/abbrev": {	
            "version": "1.1.1",	
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",	
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",	
            "dev": true	
          },	
          "node_modules/accepts": {	
            "version": "1.3.8",	
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",	
            "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",	
            "dependencies": {	
              "mime-types": "~2.1.34",	
              "negotiator": "0.6.3"	
            },	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/acorn": {	
            "version": "8.11.3",	
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.11.3.tgz",	
            "integrity": "sha512-Y9rRfJG5jcKOE0CLisYbojUjIrIEE7AGMzA/Sm4BslANhbS+cDMpgBdcPT91oJ7OuJ9hYJBx59RjbhxVnrF8Xg==",	
            "devOptional": true,	
            "bin": {	
              "acorn": "bin/acorn"	
            },	
            "engines": {	
              "node": ">=0.4.0"	
            }	
          },	
          "node_modules/acorn-walk": {	
            "version": "8.3.2",	
            "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.2.tgz",	
            "integrity": "sha512-cjkyv4OtNCIeqhHrfS81QWXoCBPExR/J62oyEqepVw8WaQeSqpW2uhuLPh1m9eWhDuOo/jUXVTlifvesOWp/4A==",	
            "devOptional": true,	
            "engines": {	
              "node": ">=0.4.0"	
            }	
          },	
          "node_modules/ansi-regex": {	
            "version": "5.0.1",	
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",	
            "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/ansi-styles": {	
            "version": "4.3.0",	
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",	
            "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",	
            "dependencies": {	
              "color-convert": "^2.0.1"	
            },	
            "engines": {	
              "node": ">=8"	
            },	
            "funding": {	
              "url": "https://github.com/chalk/ansi-styles?sponsor=1"	
            }	
          },	
          "node_modules/any-promise": {	
            "version": "1.3.0",	
            "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",	
            "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A=="	
          },	
          "node_modules/anymatch": {	
            "version": "3.1.3",	
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",	
            "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",	
            "dev": true,	
            "dependencies": {	
              "normalize-path": "^3.0.0",	
              "picomatch": "^2.0.4"	
            },	
            "engines": {	
              "node": ">= 8"	
            }	
          },	
          "node_modules/app-root-path": {	
            "version": "3.1.0",	
            "resolved": "https://registry.npmjs.org/app-root-path/-/app-root-path-3.1.0.tgz",	
            "integrity": "sha512-biN3PwB2gUtjaYy/isrU3aNWI5w+fAfvHkSvCKeQGxhmYpwKFUxudR3Yya+KqVRHBmEDYh+/lTozYCFbmzX4nA==",	
            "engines": {	
              "node": ">= 6.0.0"	
            }	
          },	
          "node_modules/arg": {	
            "version": "4.1.3",	
            "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",	
            "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",	
            "devOptional": true	
          },	
          "node_modules/array-flatten": {	
            "version": "1.1.1",	
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",	
            "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="	
          },	
          "node_modules/balanced-match": {	
            "version": "1.0.2",	
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",	
            "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="	
          },	
          "node_modules/base64-js": {	
            "version": "1.5.1",	
            "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",	
            "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",	
            "funding": [	
              {	
                "type": "github",	
                "url": "https://github.com/sponsors/feross"	
              },	
              {	
                "type": "patreon",	
                "url": "https://www.patreon.com/feross"	
              },	
              {	
                "type": "consulting",	
                "url": "https://feross.org/support"	
              }	
            ]	
          },	
          "node_modules/basic-auth": {	
            "version": "2.0.1",	
            "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-2.0.1.tgz",	
            "integrity": "sha512-NF+epuEdnUYVlGuhaxbbq+dvJttwLnGY+YixlXlME5KpQ5W3CnXA5cVTneY3SPbPDRkcjMbifrwmFYcClgOZeg==",	
            "dependencies": {	
              "safe-buffer": "5.1.2"	
            },	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/basic-auth/node_modules/safe-buffer": {	
            "version": "5.1.2",	
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",	
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="	
          },	
          "node_modules/binary-extensions": {	
            "version": "2.2.0",	
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",	
            "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",	
            "dev": true,	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/body-parser": {	
            "version": "1.20.1",	
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.1.tgz",	
            "integrity": "sha512-jWi7abTbYwajOytWCQc37VulmWiRae5RyTpaCyDcS5/lMdtwSz5lOpDE67srw/HYe35f1z3fDQw+3txg7gNtWw==",	
            "dependencies": {	
              "bytes": "3.1.2",	
              "content-type": "~1.0.4",	
              "debug": "2.6.9",	
              "depd": "2.0.0",	
              "destroy": "1.2.0",	
              "http-errors": "2.0.0",	
              "iconv-lite": "0.4.24",	
              "on-finished": "2.4.1",	
              "qs": "6.11.0",	
              "raw-body": "2.5.1",	
              "type-is": "~1.6.18",	
              "unpipe": "1.0.0"	
            },	
            "engines": {	
              "node": ">= 0.8",	
              "npm": "1.2.8000 || >= 1.4.16"	
            }	
          },	
          "node_modules/brace-expansion": {	
            "version": "2.0.1",	
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",	
            "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",	
            "dependencies": {	
              "balanced-match": "^1.0.0"	
            }	
          },	
          "node_modules/braces": {	
            "version": "3.0.2",	
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",	
            "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",	
            "dev": true,	
            "dependencies": {	
              "fill-range": "^7.0.1"	
            },	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/buffer": {	
            "version": "6.0.3",	
            "resolved": "https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz",	
            "integrity": "sha512-FTiCpNxtwiZZHEZbcbTIcZjERVICn9yq/pDFkTl95/AxzD1naBctN7YO68riM/gLSDY7sdrMby8hofADYuuqOA==",	
            "funding": [	
              {	
                "type": "github",	
                "url": "https://github.com/sponsors/feross"	
              },	
              {	
                "type": "patreon",	
                "url": "https://www.patreon.com/feross"	
              },	
              {	
                "type": "consulting",	
                "url": "https://feross.org/support"	
              }	
            ],	
            "dependencies": {	
              "base64-js": "^1.3.1",	
              "ieee754": "^1.2.1"	
            }	
          },	
          "node_modules/buffer-from": {	
            "version": "1.1.2",	
            "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",	
            "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",	
            "dev": true	
          },	
          "node_modules/buffer-writer": {	
            "version": "2.0.0",	
            "resolved": "https://registry.npmjs.org/buffer-writer/-/buffer-writer-2.0.0.tgz",	
            "integrity": "sha512-a7ZpuTZU1TRtnwyCNW3I5dc0wWNC3VR9S++Ewyk2HHZdrO3CQJqSpd+95Us590V6AL7JqUAH2IwZ/398PmNFgw==",	
            "engines": {	
              "node": ">=4"	
            }	
          },	
          "node_modules/bytes": {	
            "version": "3.1.2",	
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",	
            "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/call-bind": {	
            "version": "1.0.2",	
            "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",	
            "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",	
            "dependencies": {	
              "function-bind": "^1.1.1",	
              "get-intrinsic": "^1.0.2"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/chalk": {	
            "version": "4.1.2",	
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",	
            "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",	
            "dependencies": {	
              "ansi-styles": "^4.1.0",	
              "supports-color": "^7.1.0"	
            },	
            "engines": {	
              "node": ">=10"	
            },	
            "funding": {	
              "url": "https://github.com/chalk/chalk?sponsor=1"	
            }	
          },	
          "node_modules/chokidar": {	
            "version": "3.5.3",	
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",	
            "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",	
            "dev": true,	
            "funding": [	
              {	
                "type": "individual",	
                "url": "https://paulmillr.com/funding/"	
              }	
            ],	
            "dependencies": {	
              "anymatch": "~3.1.2",	
              "braces": "~3.0.2",	
              "glob-parent": "~5.1.2",	
              "is-binary-path": "~2.1.0",	
              "is-glob": "~4.0.1",	
              "normalize-path": "~3.0.0",	
              "readdirp": "~3.6.0"	
            },	
            "engines": {	
              "node": ">= 8.10.0"	
            },	
            "optionalDependencies": {	
              "fsevents": "~2.3.2"	
            }	
          },	
          "node_modules/cli-highlight": {	
            "version": "2.1.11",	
            "resolved": "https://registry.npmjs.org/cli-highlight/-/cli-highlight-2.1.11.tgz",	
            "integrity": "sha512-9KDcoEVwyUXrjcJNvHD0NFc/hiwe/WPVYIleQh2O1N2Zro5gWJZ/K+3DGn8w8P/F6FxOgzyC5bxDyHIgCSPhGg==",	
            "dependencies": {	
              "chalk": "^4.0.0",	
              "highlight.js": "^10.7.1",	
              "mz": "^2.4.0",	
              "parse5": "^5.1.1",	
              "parse5-htmlparser2-tree-adapter": "^6.0.0",	
              "yargs": "^16.0.0"	
            },	
            "bin": {	
              "highlight": "bin/highlight"	
            },	
            "engines": {	
              "node": ">=8.0.0",	
              "npm": ">=5.0.0"	
            }	
          },	
          "node_modules/cli-highlight/node_modules/cliui": {	
            "version": "7.0.4",	
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",	
            "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",	
            "dependencies": {	
              "string-width": "^4.2.0",	
              "strip-ansi": "^6.0.0",	
              "wrap-ansi": "^7.0.0"	
            }	
          },	
          "node_modules/cli-highlight/node_modules/yargs": {	
            "version": "16.2.0",	
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",	
            "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",	
            "dependencies": {	
              "cliui": "^7.0.2",	
              "escalade": "^3.1.1",	
              "get-caller-file": "^2.0.5",	
              "require-directory": "^2.1.1",	
              "string-width": "^4.2.0",	
              "y18n": "^5.0.5",	
              "yargs-parser": "^20.2.2"	
            },	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/cli-highlight/node_modules/yargs-parser": {	
            "version": "20.2.9",	
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",	
            "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/cliui": {	
            "version": "8.0.1",	
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",	
            "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",	
            "dependencies": {	
              "string-width": "^4.2.0",	
              "strip-ansi": "^6.0.1",	
              "wrap-ansi": "^7.0.0"	
            },	
            "engines": {	
              "node": ">=12"	
            }	
          },	
          "node_modules/color-convert": {	
            "version": "2.0.1",	
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",	
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",	
            "dependencies": {	
              "color-name": "~1.1.4"	
            },	
            "engines": {	
              "node": ">=7.0.0"	
            }	
          },	
          "node_modules/color-name": {	
            "version": "1.1.4",	
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",	
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="	
          },	
          "node_modules/concat-map": {	
            "version": "0.0.1",	
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",	
            "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",	
            "dev": true	
          },	
          "node_modules/concurrently": {	
            "version": "8.2.2",	
            "resolved": "https://registry.npmjs.org/concurrently/-/concurrently-8.2.2.tgz",	
            "integrity": "sha512-1dP4gpXFhei8IOtlXRE/T/4H88ElHgTiUzh71YUmtjTEHMSRS2Z/fgOxHSxxusGHogsRfxNq1vyAwxSC+EVyDg==",	
            "dev": true,	
            "dependencies": {	
              "chalk": "^4.1.2",	
              "date-fns": "^2.30.0",	
              "lodash": "^4.17.21",	
              "rxjs": "^7.8.1",	
              "shell-quote": "^1.8.1",	
              "spawn-command": "0.0.2",	
              "supports-color": "^8.1.1",	
              "tree-kill": "^1.2.2",	
              "yargs": "^17.7.2"	
            },	
            "bin": {	
              "conc": "dist/bin/concurrently.js",	
              "concurrently": "dist/bin/concurrently.js"	
            },	
            "engines": {	
              "node": "^14.13.0 || >=16.0.0"	
            },	
            "funding": {	
              "url": "https://github.com/open-cli-tools/concurrently?sponsor=1"	
            }	
          },	
          "node_modules/concurrently/node_modules/supports-color": {	
            "version": "8.1.1",	
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",	
            "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",	
            "dev": true,	
            "dependencies": {	
              "has-flag": "^4.0.0"	
            },	
            "engines": {	
              "node": ">=10"	
            },	
            "funding": {	
              "url": "https://github.com/chalk/supports-color?sponsor=1"	
            }	
          },	
          "node_modules/content-disposition": {	
            "version": "0.5.4",	
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",	
            "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",	
            "dependencies": {	
              "safe-buffer": "5.2.1"	
            },	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/content-type": {	
            "version": "1.0.5",	
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",	
            "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/cookie": {	
            "version": "0.5.0",	
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",	
            "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/cookie-signature": {	
            "version": "1.0.6",	
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",	
            "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="	
          },	
          "node_modules/cors": {	
            "version": "2.8.5",	
            "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",	
            "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",	
            "dependencies": {	
              "object-assign": "^4",	
              "vary": "^1"	
            },	
            "engines": {	
              "node": ">= 0.10"	
            }	
          },	
          "node_modules/create-require": {	
            "version": "1.1.1",	
            "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",	
            "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",	
            "devOptional": true	
          },	
          "node_modules/date-fns": {	
            "version": "2.30.0",	
            "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-2.30.0.tgz",	
            "integrity": "sha512-fnULvOpxnC5/Vg3NCiWelDsLiUc9bRwAPs/+LfTLNvetFCtCTN+yQz15C/fs4AwX1R9K5GLtLfn8QW+dWisaAw==",	
            "dependencies": {	
              "@babel/runtime": "^7.21.0"	
            },	
            "engines": {	
              "node": ">=0.11"	
            },	
            "funding": {	
              "type": "opencollective",	
              "url": "https://opencollective.com/date-fns"	
            }	
          },	
          "node_modules/debug": {	
            "version": "2.6.9",	
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",	
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",	
            "dependencies": {	
              "ms": "2.0.0"	
            }	
          },	
          "node_modules/depd": {	
            "version": "2.0.0",	
            "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",	
            "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/destroy": {	
            "version": "1.2.0",	
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",	
            "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",	
            "engines": {	
              "node": ">= 0.8",	
              "npm": "1.2.8000 || >= 1.4.16"	
            }	
          },	
          "node_modules/diff": {	
            "version": "4.0.2",	
            "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",	
            "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",	
            "devOptional": true,	
            "engines": {	
              "node": ">=0.3.1"	
            }	
          },	
          "node_modules/dotenv": {	
            "version": "16.3.1",	
            "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.3.1.tgz",	
            "integrity": "sha512-IPzF4w4/Rd94bA9imS68tZBaYyBWSCE47V1RGuMrB94iyTOIEwRmVL2x/4An+6mETpLrKJ5hQkB8W4kFAadeIQ==",	
            "engines": {	
              "node": ">=12"	
            },	
            "funding": {	
              "url": "https://github.com/motdotla/dotenv?sponsor=1"	
            }	
          },	
          "node_modules/dynamic-dedupe": {	
            "version": "0.3.0",	
            "resolved": "https://registry.npmjs.org/dynamic-dedupe/-/dynamic-dedupe-0.3.0.tgz",	
            "integrity": "sha512-ssuANeD+z97meYOqd50e04Ze5qp4bPqo8cCkI4TRjZkzAUgIDTrXV1R8QCdINpiI+hw14+rYazvTRdQrz0/rFQ==",	
            "dev": true,	
            "dependencies": {	
              "xtend": "^4.0.0"	
            }	
          },	
          "node_modules/ee-first": {	
            "version": "1.1.1",	
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",	
            "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="	
          },	
          "node_modules/emoji-regex": {	
            "version": "8.0.0",	
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",	
            "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="	
          },	
          "node_modules/encodeurl": {	
            "version": "1.0.2",	
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",	
            "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/escalade": {	
            "version": "3.1.1",	
            "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",	
            "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",	
            "engines": {	
              "node": ">=6"	
            }	
          },	
          "node_modules/escape-html": {	
            "version": "1.0.3",	
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",	
            "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="	
          },	
          "node_modules/etag": {	
            "version": "1.8.1",	
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",	
            "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/express": {	
            "version": "4.18.2",	
            "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",	
            "integrity": "sha512-5/PsL6iGPdfQ/lKM1UuielYgv3BUoJfz1aUwU9vHZ+J7gyvwdQXFEBIEIaxeGf0GIcreATNyBExtalisDbuMqQ==",	
            "dependencies": {	
              "accepts": "~1.3.8",	
              "array-flatten": "1.1.1",	
              "body-parser": "1.20.1",	
              "content-disposition": "0.5.4",	
              "content-type": "~1.0.4",	
              "cookie": "0.5.0",	
              "cookie-signature": "1.0.6",	
              "debug": "2.6.9",	
              "depd": "2.0.0",	
              "encodeurl": "~1.0.2",	
              "escape-html": "~1.0.3",	
              "etag": "~1.8.1",	
              "finalhandler": "1.2.0",	
              "fresh": "0.5.2",	
              "http-errors": "2.0.0",	
              "merge-descriptors": "1.0.1",	
              "methods": "~1.1.2",	
              "on-finished": "2.4.1",	
              "parseurl": "~1.3.3",	
              "path-to-regexp": "0.1.7",	
              "proxy-addr": "~2.0.7",	
              "qs": "6.11.0",	
              "range-parser": "~1.2.1",	
              "safe-buffer": "5.2.1",	
              "send": "0.18.0",	
              "serve-static": "1.15.0",	
              "setprototypeof": "1.2.0",	
              "statuses": "2.0.1",	
              "type-is": "~1.6.18",	
              "utils-merge": "1.0.1",	
              "vary": "~1.1.2"	
            },	
            "engines": {	
              "node": ">= 0.10.0"	
            }	
          },	
          "node_modules/fill-range": {	
            "version": "7.0.1",	
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",	
            "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",	
            "dev": true,	
            "dependencies": {	
              "to-regex-range": "^5.0.1"	
            },	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/finalhandler": {	
            "version": "1.2.0",	
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",	
            "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",	
            "dependencies": {	
              "debug": "2.6.9",	
              "encodeurl": "~1.0.2",	
              "escape-html": "~1.0.3",	
              "on-finished": "2.4.1",	
              "parseurl": "~1.3.3",	
              "statuses": "2.0.1",	
              "unpipe": "~1.0.0"	
            },	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/forwarded": {	
            "version": "0.2.0",	
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",	
            "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/fresh": {	
            "version": "0.5.2",	
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",	
            "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/fs.realpath": {	
            "version": "1.0.0",	
            "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",	
            "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw=="	
          },	
          "node_modules/fsevents": {	
            "version": "2.3.3",	
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",	
            "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",	
            "dev": true,	
            "hasInstallScript": true,	
            "optional": true,	
            "os": [	
              "darwin"	
            ],	
            "engines": {	
              "node": "^8.16.0 || ^10.6.0 || >=11.0.0"	
            }	
          },	
          "node_modules/function-bind": {	
            "version": "1.1.2",	
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",	
            "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/get-caller-file": {	
            "version": "2.0.5",	
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",	
            "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",	
            "engines": {	
              "node": "6.* || 8.* || >= 10.*"	
            }	
          },	
          "node_modules/get-intrinsic": {	
            "version": "1.2.1",	
            "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.1.tgz",	
            "integrity": "sha512-2DcsyfABl+gVHEfCOaTrWgyt+tb6MSEGmKq+kI5HwLbIYgjgmMcV8KQ41uaKz1xxUcn9tJtgFbQUEVcEbd0FYw==",	
            "dependencies": {	
              "function-bind": "^1.1.1",	
              "has": "^1.0.3",	
              "has-proto": "^1.0.1",	
              "has-symbols": "^1.0.3"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/glob": {	
            "version": "8.1.0",	
            "resolved": "https://registry.npmjs.org/glob/-/glob-8.1.0.tgz",	
            "integrity": "sha512-r8hpEjiQEYlF2QU0df3dS+nxxSIreXQS1qRhMJM0Q5NDdR386C7jb7Hwwod8Fgiuex+k0GFjgft18yvxm5XoCQ==",	
            "dependencies": {	
              "fs.realpath": "^1.0.0",	
              "inflight": "^1.0.4",	
              "inherits": "2",	
              "minimatch": "^5.0.1",	
              "once": "^1.3.0"	
            },	
            "engines": {	
              "node": ">=12"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/isaacs"	
            }	
          },	
          "node_modules/glob-parent": {	
            "version": "5.1.2",	
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",	
            "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",	
            "dev": true,	
            "dependencies": {	
              "is-glob": "^4.0.1"	
            },	
            "engines": {	
              "node": ">= 6"	
            }	
          },	
          "node_modules/has": {	
            "version": "1.0.4",	
            "resolved": "https://registry.npmjs.org/has/-/has-1.0.4.tgz",	
            "integrity": "sha512-qdSAmqLF6209RFj4VVItywPMbm3vWylknmB3nvNiUIs72xAimcM8nVYxYr7ncvZq5qzk9MKIZR8ijqD/1QuYjQ==",	
            "engines": {	
              "node": ">= 0.4.0"	
            }	
          },	
          "node_modules/has-flag": {	
            "version": "4.0.0",	
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",	
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/has-proto": {	
            "version": "1.0.1",	
            "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.1.tgz",	
            "integrity": "sha512-7qE+iP+O+bgF9clE5+UoBFzE65mlBiVj3tKCrlNQ0Ogwm0BjpT/gK4SlLYDMybDh5I3TCTKnPPa0oMG7JDYrhg==",	
            "engines": {	
              "node": ">= 0.4"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/has-symbols": {	
            "version": "1.0.3",	
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",	
            "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",	
            "engines": {	
              "node": ">= 0.4"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/hasown": {	
            "version": "2.0.2",	
            "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",	
            "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",	
            "dev": true,	
            "dependencies": {	
              "function-bind": "^1.1.2"	
            },	
            "engines": {	
              "node": ">= 0.4"	
            }	
          },	
          "node_modules/highlight.js": {	
            "version": "10.7.3",	
            "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-10.7.3.tgz",	
            "integrity": "sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==",	
            "engines": {	
              "node": "*"	
            }	
          },	
          "node_modules/http-errors": {	
            "version": "2.0.0",	
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",	
            "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",	
            "dependencies": {	
              "depd": "2.0.0",	
              "inherits": "2.0.4",	
              "setprototypeof": "1.2.0",	
              "statuses": "2.0.1",	
              "toidentifier": "1.0.1"	
            },	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/iconv-lite": {	
            "version": "0.4.24",	
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",	
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",	
            "dependencies": {	
              "safer-buffer": ">= 2.1.2 < 3"	
            },	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/ieee754": {	
            "version": "1.2.1",	
            "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",	
            "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",	
            "funding": [	
              {	
                "type": "github",	
                "url": "https://github.com/sponsors/feross"	
              },	
              {	
                "type": "patreon",	
                "url": "https://www.patreon.com/feross"	
              },	
              {	
                "type": "consulting",	
                "url": "https://feross.org/support"	
              }	
            ]	
          },	
          "node_modules/ignore-by-default": {	
            "version": "1.0.1",	
            "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",	
            "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",	
            "dev": true	
          },	
          "node_modules/inflight": {	
            "version": "1.0.6",	
            "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",	
            "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",	
            "dependencies": {	
              "once": "^1.3.0",	
              "wrappy": "1"	
            }	
          },	
          "node_modules/inherits": {	
            "version": "2.0.4",	
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",	
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="	
          },	
          "node_modules/ipaddr.js": {	
            "version": "1.9.1",	
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",	
            "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",	
            "engines": {	
              "node": ">= 0.10"	
            }	
          },	
          "node_modules/is-binary-path": {	
            "version": "2.1.0",	
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",	
            "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",	
            "dev": true,	
            "dependencies": {	
              "binary-extensions": "^2.0.0"	
            },	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/is-core-module": {	
            "version": "2.13.1",	
            "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.13.1.tgz",	
            "integrity": "sha512-hHrIjvZsftOsvKSn2TRYl63zvxsgE0K+0mYMoH6gD4omR5IWB2KynivBQczo3+wF1cCkjzvptnI9Q0sPU66ilw==",	
            "dev": true,	
            "dependencies": {	
              "hasown": "^2.0.0"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/is-extglob": {	
            "version": "2.1.1",	
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",	
            "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",	
            "dev": true,	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/is-fullwidth-code-point": {	
            "version": "3.0.0",	
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",	
            "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/is-glob": {	
            "version": "4.0.3",	
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",	
            "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",	
            "dev": true,	
            "dependencies": {	
              "is-extglob": "^2.1.1"	
            },	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/is-number": {	
            "version": "7.0.0",	
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",	
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",	
            "dev": true,	
            "engines": {	
              "node": ">=0.12.0"	
            }	
          },	
          "node_modules/lodash": {	
            "version": "4.17.21",	
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",	
            "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",	
            "dev": true	
          },	
          "node_modules/lru-cache": {	
            "version": "6.0.0",	
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",	
            "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",	
            "dev": true,	
            "dependencies": {	
              "yallist": "^4.0.0"	
            },	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/make-error": {	
            "version": "1.3.6",	
            "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",	
            "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",	
            "devOptional": true	
          },	
          "node_modules/media-typer": {	
            "version": "0.3.0",	
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",	
            "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/merge-descriptors": {	
            "version": "1.0.1",	
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",	
            "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="	
          },	
          "node_modules/methods": {	
            "version": "1.1.2",	
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",	
            "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/mime": {	
            "version": "1.6.0",	
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",	
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",	
            "bin": {	
              "mime": "cli.js"	
            },	
            "engines": {	
              "node": ">=4"	
            }	
          },	
          "node_modules/mime-db": {	
            "version": "1.52.0",	
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",	
            "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/mime-types": {	
            "version": "2.1.35",	
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",	
            "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",	
            "dependencies": {	
              "mime-db": "1.52.0"	
            },	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/minimatch": {	
            "version": "5.1.6",	
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",	
            "integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",	
            "dependencies": {	
              "brace-expansion": "^2.0.1"	
            },	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/minimist": {	
            "version": "1.2.8",	
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",	
            "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",	
            "dev": true,	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/mkdirp": {	
            "version": "2.1.6",	
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-2.1.6.tgz",	
            "integrity": "sha512-+hEnITedc8LAtIP9u3HJDFIdcLV2vXP33sqLLIzkv1Db1zO/1OxbvYf0Y1OC/S/Qo5dxHXepofhmxL02PsKe+A==",	
            "bin": {	
              "mkdirp": "dist/cjs/src/bin.js"	
            },	
            "engines": {	
              "node": ">=10"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/isaacs"	
            }	
          },	
          "node_modules/morgan": {	
            "version": "1.10.0",	
            "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.10.0.tgz",	
            "integrity": "sha512-AbegBVI4sh6El+1gNwvD5YIck7nSA36weD7xvIxG4in80j/UoK8AEGaWnnz8v1GxonMCltmlNs5ZKbGvl9b1XQ==",	
            "dependencies": {	
              "basic-auth": "~2.0.1",	
              "debug": "2.6.9",	
              "depd": "~2.0.0",	
              "on-finished": "~2.3.0",	
              "on-headers": "~1.0.2"	
            },	
            "engines": {	
              "node": ">= 0.8.0"	
            }	
          },	
          "node_modules/morgan/node_modules/on-finished": {	
            "version": "2.3.0",	
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",	
            "integrity": "sha512-ikqdkGAAyf/X/gPhXGvfgAytDZtDbr+bkNUJ0N9h5MI/dmdgCs3l6hoHrcUv41sRKew3jIwrp4qQDXiK99Utww==",	
            "dependencies": {	
              "ee-first": "1.1.1"	
            },	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/ms": {	
            "version": "2.0.0",	
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",	
            "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="	
          },	
          "node_modules/mz": {	
            "version": "2.7.0",	
            "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",	
            "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",	
            "dependencies": {	
              "any-promise": "^1.0.0",	
              "object-assign": "^4.0.1",	
              "thenify-all": "^1.0.0"	
            }	
          },	
          "node_modules/negotiator": {	
            "version": "0.6.3",	
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",	
            "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/nodemon": {	
            "version": "3.0.1",	
            "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.0.1.tgz",	
            "integrity": "sha512-g9AZ7HmkhQkqXkRc20w+ZfQ73cHLbE8hnPbtaFbFtCumZsjyMhKk9LajQ07U5Ux28lvFjZ5X7HvWR1xzU8jHVw==",	
            "dev": true,	
            "dependencies": {	
              "chokidar": "^3.5.2",	
              "debug": "^3.2.7",	
              "ignore-by-default": "^1.0.1",	
              "minimatch": "^3.1.2",	
              "pstree.remy": "^1.1.8",	
              "semver": "^7.5.3",	
              "simple-update-notifier": "^2.0.0",	
              "supports-color": "^5.5.0",	
              "touch": "^3.1.0",	
              "undefsafe": "^2.0.5"	
            },	
            "bin": {	
              "nodemon": "bin/nodemon.js"	
            },	
            "engines": {	
              "node": ">=10"	
            },	
            "funding": {	
              "type": "opencollective",	
              "url": "https://opencollective.com/nodemon"	
            }	
          },	
          "node_modules/nodemon/node_modules/brace-expansion": {	
            "version": "1.1.11",	
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",	
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",	
            "dev": true,	
            "dependencies": {	
              "balanced-match": "^1.0.0",	
              "concat-map": "0.0.1"	
            }	
          },	
          "node_modules/nodemon/node_modules/debug": {	
            "version": "3.2.7",	
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",	
            "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",	
            "dev": true,	
            "dependencies": {	
              "ms": "^2.1.1"	
            }	
          },	
          "node_modules/nodemon/node_modules/has-flag": {	
            "version": "3.0.0",	
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",	
            "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",	
            "dev": true,	
            "engines": {	
              "node": ">=4"	
            }	
          },	
          "node_modules/nodemon/node_modules/minimatch": {	
            "version": "3.1.2",	
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",	
            "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",	
            "dev": true,	
            "dependencies": {	
              "brace-expansion": "^1.1.7"	
            },	
            "engines": {	
              "node": "*"	
            }	
          },	
          "node_modules/nodemon/node_modules/ms": {	
            "version": "2.1.3",	
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",	
            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",	
            "dev": true	
          },	
          "node_modules/nodemon/node_modules/supports-color": {	
            "version": "5.5.0",	
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",	
            "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",	
            "dev": true,	
            "dependencies": {	
              "has-flag": "^3.0.0"	
            },	
            "engines": {	
              "node": ">=4"	
            }	
          },	
          "node_modules/nopt": {	
            "version": "1.0.10",	
            "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",	
            "integrity": "sha512-NWmpvLSqUrgrAC9HCuxEvb+PSloHpqVu+FqcO4eeF2h5qYRhA7ev6KvelyQAKtegUbC6RypJnlEOhd8vloNKYg==",	
            "dev": true,	
            "dependencies": {	
              "abbrev": "1"	
            },	
            "bin": {	
              "nopt": "bin/nopt.js"	
            },	
            "engines": {	
              "node": "*"	
            }	
          },	
          "node_modules/normalize-path": {	
            "version": "3.0.0",	
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",	
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",	
            "dev": true,	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/object-assign": {	
            "version": "4.1.1",	
            "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",	
            "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/object-inspect": {	
            "version": "1.12.3",	
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.3.tgz",	
            "integrity": "sha512-geUvdk7c+eizMNUDkRpW1wJwgfOiOeHbxBR/hLXK1aT6zmVSO0jsQcs7fj6MGw89jC/cjGfLcNOrtMYtGqm81g==",	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/on-finished": {	
            "version": "2.4.1",	
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",	
            "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",	
            "dependencies": {	
              "ee-first": "1.1.1"	
            },	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/on-headers": {	
            "version": "1.0.2",	
            "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",	
            "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/once": {	
            "version": "1.4.0",	
            "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",	
            "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",	
            "dependencies": {	
              "wrappy": "1"	
            }	
          },	
          "node_modules/packet-reader": {	
            "version": "1.0.0",	
            "resolved": "https://registry.npmjs.org/packet-reader/-/packet-reader-1.0.0.tgz",	
            "integrity": "sha512-HAKu/fG3HpHFO0AA8WE8q2g+gBJaZ9MG7fcKk+IJPLTGAD6Psw4443l+9DGRbOIh3/aXr7Phy0TjilYivJo5XQ=="	
          },	
          "node_modules/parse5": {	
            "version": "5.1.1",	
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.1.tgz",	
            "integrity": "sha512-ugq4DFI0Ptb+WWjAdOK16+u/nHfiIrcE+sh8kZMaM0WllQKLI9rOUq6c2b7cwPkXdzfQESqvoqK6ug7U/Yyzug=="	
          },	
          "node_modules/parse5-htmlparser2-tree-adapter": {	
            "version": "6.0.1",	
            "resolved": "https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-6.0.1.tgz",	
            "integrity": "sha512-qPuWvbLgvDGilKc5BoicRovlT4MtYT6JfJyBOMDsKoiT+GiuP5qyrPCnR9HcPECIJJmZh5jRndyNThnhhb/vlA==",	
            "dependencies": {	
              "parse5": "^6.0.1"	
            }	
          },	
          "node_modules/parse5-htmlparser2-tree-adapter/node_modules/parse5": {	
            "version": "6.0.1",	
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",	
            "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="	
          },	
          "node_modules/parseurl": {	
            "version": "1.3.3",	
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",	
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/path-is-absolute": {	
            "version": "1.0.1",	
            "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",	
            "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",	
            "dev": true,	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/path-parse": {	
            "version": "1.0.7",	
            "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",	
            "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",	
            "dev": true	
          },	
          "node_modules/path-to-regexp": {	
            "version": "0.1.7",	
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",	
            "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="	
          },	
          "node_modules/pg": {	
            "version": "8.11.3",	
            "resolved": "https://registry.npmjs.org/pg/-/pg-8.11.3.tgz",	
            "integrity": "sha512-+9iuvG8QfaaUrrph+kpF24cXkH1YOOUeArRNYIxq1viYHZagBxrTno7cecY1Fa44tJeZvaoG+Djpkc3JwehN5g==",	
            "dependencies": {	
              "buffer-writer": "2.0.0",	
              "packet-reader": "1.0.0",	
              "pg-connection-string": "^2.6.2",	
              "pg-pool": "^3.6.1",	
              "pg-protocol": "^1.6.0",	
              "pg-types": "^2.1.0",	
              "pgpass": "1.x"	
            },	
            "engines": {	
              "node": ">= 8.0.0"	
            },	
            "optionalDependencies": {	
              "pg-cloudflare": "^1.1.1"	
            },	
            "peerDependencies": {	
              "pg-native": ">=3.0.1"	
            },	
            "peerDependenciesMeta": {	
              "pg-native": {	
                "optional": true	
              }	
            }	
          },	
          "node_modules/pg-cloudflare": {	
            "version": "1.1.1",	
            "resolved": "https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.1.1.tgz",	
            "integrity": "sha512-xWPagP/4B6BgFO+EKz3JONXv3YDgvkbVrGw2mTo3D6tVDQRh1e7cqVGvyR3BE+eQgAvx1XhW/iEASj4/jCWl3Q==",	
            "optional": true	
          },	
          "node_modules/pg-connection-string": {	
            "version": "2.6.2",	
            "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.6.2.tgz",	
            "integrity": "sha512-ch6OwaeaPYcova4kKZ15sbJ2hKb/VP48ZD2gE7i1J+L4MspCtBMAx8nMgz7bksc7IojCIIWuEhHibSMFH8m8oA=="	
          },	
          "node_modules/pg-int8": {	
            "version": "1.0.1",	
            "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",	
            "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==",	
            "engines": {	
              "node": ">=4.0.0"	
            }	
          },	
          "node_modules/pg-pool": {	
            "version": "3.6.1",	
            "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.6.1.tgz",	
            "integrity": "sha512-jizsIzhkIitxCGfPRzJn1ZdcosIt3pz9Sh3V01fm1vZnbnCMgmGl5wvGGdNN2EL9Rmb0EcFoCkixH4Pu+sP9Og==",	
            "peerDependencies": {	
              "pg": ">=8.0"	
            }	
          },	
          "node_modules/pg-protocol": {	
            "version": "1.6.0",	
            "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.6.0.tgz",	
            "integrity": "sha512-M+PDm637OY5WM307051+bsDia5Xej6d9IR4GwJse1qA1DIhiKlksvrneZOYQq42OM+spubpcNYEo2FcKQrDk+Q=="	
          },	
          "node_modules/pg-types": {	
            "version": "2.2.0",	
            "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",	
            "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",	
            "dependencies": {	
              "pg-int8": "1.0.1",	
              "postgres-array": "~2.0.0",	
              "postgres-bytea": "~1.0.0",	
              "postgres-date": "~1.0.4",	
              "postgres-interval": "^1.1.0"	
            },	
            "engines": {	
              "node": ">=4"	
            }	
          },	
          "node_modules/pgpass": {	
            "version": "1.0.5",	
            "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",	
            "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",	
            "dependencies": {	
              "split2": "^4.1.0"	
            }	
          },	
          "node_modules/picomatch": {	
            "version": "2.3.1",	
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",	
            "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",	
            "dev": true,	
            "engines": {	
              "node": ">=8.6"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/jonschlinkert"	
            }	
          },	
          "node_modules/postgres-array": {	
            "version": "2.0.0",	
            "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",	
            "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==",	
            "engines": {	
              "node": ">=4"	
            }	
          },	
          "node_modules/postgres-bytea": {	
            "version": "1.0.0",	
            "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.0.tgz",	
            "integrity": "sha512-xy3pmLuQqRBZBXDULy7KbaitYqLcmxigw14Q5sj8QBVLqEwXfeybIKVWiqAXTlcvdvb0+xkOtDbfQMOf4lST1w==",	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/postgres-date": {	
            "version": "1.0.7",	
            "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",	
            "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==",	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/postgres-interval": {	
            "version": "1.2.0",	
            "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",	
            "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",	
            "dependencies": {	
              "xtend": "^4.0.0"	
            },	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/proxy-addr": {	
            "version": "2.0.7",	
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",	
            "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",	
            "dependencies": {	
              "forwarded": "0.2.0",	
              "ipaddr.js": "1.9.1"	
            },	
            "engines": {	
              "node": ">= 0.10"	
            }	
          },	
          "node_modules/pstree.remy": {	
            "version": "1.1.8",	
            "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",	
            "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",	
            "dev": true	
          },	
          "node_modules/qs": {	
            "version": "6.11.0",	
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",	
            "integrity": "sha512-MvjoMCJwEarSbUYk5O+nmoSzSutSsTwF85zcHPQ9OrlFoZOYIjaqBAJIqIXjptyD5vThxGq52Xu/MaJzRkIk4Q==",	
            "dependencies": {	
              "side-channel": "^1.0.4"	
            },	
            "engines": {	
              "node": ">=0.6"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/range-parser": {	
            "version": "1.2.1",	
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",	
            "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/raw-body": {	
            "version": "2.5.1",	
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",	
            "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",	
            "dependencies": {	
              "bytes": "3.1.2",	
              "http-errors": "2.0.0",	
              "iconv-lite": "0.4.24",	
              "unpipe": "1.0.0"	
            },	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/readdirp": {	
            "version": "3.6.0",	
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",	
            "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",	
            "dev": true,	
            "dependencies": {	
              "picomatch": "^2.2.1"	
            },	
            "engines": {	
              "node": ">=8.10.0"	
            }	
          },	
          "node_modules/reflect-metadata": {	
            "version": "0.1.13",	
            "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.1.13.tgz",	
            "integrity": "sha512-Ts1Y/anZELhSsjMcU605fU9RE4Oi3p5ORujwbIKXfWa+0Zxs510Qrmrce5/Jowq3cHSZSJqBjypxmHarc+vEWg=="	
          },	
          "node_modules/regenerator-runtime": {	
            "version": "0.14.0",	
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.0.tgz",	
            "integrity": "sha512-srw17NI0TUWHuGa5CFGGmhfNIeja30WMBfbslPNhf6JrqQlLN5gcrvig1oqPxiVaXb0oW0XRKtH6Nngs5lKCIA=="	
          },	
          "node_modules/require-directory": {	
            "version": "2.1.1",	
            "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",	
            "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/resolve": {	
            "version": "1.22.8",	
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",	
            "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",	
            "dev": true,	
            "dependencies": {	
              "is-core-module": "^2.13.0",	
              "path-parse": "^1.0.7",	
              "supports-preserve-symlinks-flag": "^1.0.0"	
            },	
            "bin": {	
              "resolve": "bin/resolve"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/rimraf": {	
            "version": "2.7.1",	
            "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",	
            "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",	
            "dev": true,	
            "dependencies": {	
              "glob": "^7.1.3"	
            },	
            "bin": {	
              "rimraf": "bin.js"	
            }	
          },	
          "node_modules/rimraf/node_modules/brace-expansion": {	
            "version": "1.1.11",	
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",	
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",	
            "dev": true,	
            "dependencies": {	
              "balanced-match": "^1.0.0",	
              "concat-map": "0.0.1"	
            }	
          },	
          "node_modules/rimraf/node_modules/glob": {	
            "version": "7.2.3",	
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",	
            "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",	
            "dev": true,	
            "dependencies": {	
              "fs.realpath": "^1.0.0",	
              "inflight": "^1.0.4",	
              "inherits": "2",	
              "minimatch": "^3.1.1",	
              "once": "^1.3.0",	
              "path-is-absolute": "^1.0.0"	
            },	
            "engines": {	
              "node": "*"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/isaacs"	
            }	
          },	
          "node_modules/rimraf/node_modules/minimatch": {	
            "version": "3.1.2",	
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",	
            "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",	
            "dev": true,	
            "dependencies": {	
              "brace-expansion": "^1.1.7"	
            },	
            "engines": {	
              "node": "*"	
            }	
          },	
          "node_modules/rxjs": {	
            "version": "7.8.1",	
            "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.1.tgz",	
            "integrity": "sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==",	
            "dev": true,	
            "dependencies": {	
              "tslib": "^2.1.0"	
            }	
          },	
          "node_modules/safe-buffer": {	
            "version": "5.2.1",	
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",	
            "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",	
            "funding": [	
              {	
                "type": "github",	
                "url": "https://github.com/sponsors/feross"	
              },	
              {	
                "type": "patreon",	
                "url": "https://www.patreon.com/feross"	
              },	
              {	
                "type": "consulting",	
                "url": "https://feross.org/support"	
              }	
            ]	
          },	
          "node_modules/safer-buffer": {	
            "version": "2.1.2",	
            "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",	
            "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="	
          },	
          "node_modules/semver": {	
            "version": "7.5.4",	
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.5.4.tgz",	
            "integrity": "sha512-1bCSESV6Pv+i21Hvpxp3Dx+pSD8lIPt8uVjRrxAUt/nbswYc+tK6Y2btiULjd4+fnq15PX+nqQDC7Oft7WkwcA==",	
            "dev": true,	
            "dependencies": {	
              "lru-cache": "^6.0.0"	
            },	
            "bin": {	
              "semver": "bin/semver.js"	
            },	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/send": {	
            "version": "0.18.0",	
            "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",	
            "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",	
            "dependencies": {	
              "debug": "2.6.9",	
              "depd": "2.0.0",	
              "destroy": "1.2.0",	
              "encodeurl": "~1.0.2",	
              "escape-html": "~1.0.3",	
              "etag": "~1.8.1",	
              "fresh": "0.5.2",	
              "http-errors": "2.0.0",	
              "mime": "1.6.0",	
              "ms": "2.1.3",	
              "on-finished": "2.4.1",	
              "range-parser": "~1.2.1",	
              "statuses": "2.0.1"	
            },	
            "engines": {	
              "node": ">= 0.8.0"	
            }	
          },	
          "node_modules/send/node_modules/ms": {	
            "version": "2.1.3",	
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",	
            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="	
          },	
          "node_modules/serve-static": {	
            "version": "1.15.0",	
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",	
            "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",	
            "dependencies": {	
              "encodeurl": "~1.0.2",	
              "escape-html": "~1.0.3",	
              "parseurl": "~1.3.3",	
              "send": "0.18.0"	
            },	
            "engines": {	
              "node": ">= 0.8.0"	
            }	
          },	
          "node_modules/setprototypeof": {	
            "version": "1.2.0",	
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",	
            "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="	
          },	
          "node_modules/sha.js": {	
            "version": "2.4.11",	
            "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",	
            "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",	
            "dependencies": {	
              "inherits": "^2.0.1",	
              "safe-buffer": "^5.0.1"	
            },	
            "bin": {	
              "sha.js": "bin.js"	
            }	
          },	
          "node_modules/shell-quote": {	
            "version": "1.8.1",	
            "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.1.tgz",	
            "integrity": "sha512-6j1W9l1iAs/4xYBI1SYOVZyFcCis9b4KCLQ8fgAGG07QvzaRLVVRQvAy85yNmmZSjYjg4MWh4gNvlPujU/5LpA==",	
            "dev": true,	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/side-channel": {	
            "version": "1.0.4",	
            "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",	
            "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",	
            "dependencies": {	
              "call-bind": "^1.0.0",	
              "get-intrinsic": "^1.0.2",	
              "object-inspect": "^1.9.0"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/simple-update-notifier": {	
            "version": "2.0.0",	
            "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",	
            "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",	
            "dev": true,	
            "dependencies": {	
              "semver": "^7.5.3"	
            },	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/source-map": {	
            "version": "0.6.1",	
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",	
            "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",	
            "dev": true,	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/source-map-support": {	
            "version": "0.5.21",	
            "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",	
            "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",	
            "dev": true,	
            "dependencies": {	
              "buffer-from": "^1.0.0",	
              "source-map": "^0.6.0"	
            }	
          },	
          "node_modules/spawn-command": {	
            "version": "0.0.2",	
            "resolved": "https://registry.npmjs.org/spawn-command/-/spawn-command-0.0.2.tgz",	
            "integrity": "sha512-zC8zGoGkmc8J9ndvml8Xksr1Amk9qBujgbF0JAIWO7kXr43w0h/0GJNM/Vustixu+YE8N/MTrQ7N31FvHUACxQ==",	
            "dev": true	
          },	
          "node_modules/split2": {	
            "version": "4.2.0",	
            "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",	
            "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",	
            "engines": {	
              "node": ">= 10.x"	
            }	
          },	
          "node_modules/statuses": {	
            "version": "2.0.1",	
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",	
            "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/string-width": {	
            "version": "4.2.3",	
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",	
            "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",	
            "dependencies": {	
              "emoji-regex": "^8.0.0",	
              "is-fullwidth-code-point": "^3.0.0",	
              "strip-ansi": "^6.0.1"	
            },	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/strip-ansi": {	
            "version": "6.0.1",	
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",	
            "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",	
            "dependencies": {	
              "ansi-regex": "^5.0.1"	
            },	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/strip-bom": {	
            "version": "3.0.0",	
            "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",	
            "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",	
            "dev": true,	
            "engines": {	
              "node": ">=4"	
            }	
          },	
          "node_modules/strip-json-comments": {	
            "version": "2.0.1",	
            "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",	
            "integrity": "sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==",	
            "dev": true,	
            "engines": {	
              "node": ">=0.10.0"	
            }	
          },	
          "node_modules/supports-color": {	
            "version": "7.2.0",	
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",	
            "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",	
            "dependencies": {	
              "has-flag": "^4.0.0"	
            },	
            "engines": {	
              "node": ">=8"	
            }	
          },	
          "node_modules/supports-preserve-symlinks-flag": {	
            "version": "1.0.0",	
            "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",	
            "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",	
            "dev": true,	
            "engines": {	
              "node": ">= 0.4"	
            },	
            "funding": {	
              "url": "https://github.com/sponsors/ljharb"	
            }	
          },	
          "node_modules/thenify": {	
            "version": "3.3.1",	
            "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",	
            "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",	
            "dependencies": {	
              "any-promise": "^1.0.0"	
            }	
          },	
          "node_modules/thenify-all": {	
            "version": "1.6.0",	
            "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",	
            "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",	
            "dependencies": {	
              "thenify": ">= 3.1.0 < 4"	
            },	
            "engines": {	
              "node": ">=0.8"	
            }	
          },	
          "node_modules/to-regex-range": {	
            "version": "5.0.1",	
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",	
            "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",	
            "dev": true,	
            "dependencies": {	
              "is-number": "^7.0.0"	
            },	
            "engines": {	
              "node": ">=8.0"	
            }	
          },	
          "node_modules/toidentifier": {	
            "version": "1.0.1",	
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",	
            "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",	
            "engines": {	
              "node": ">=0.6"	
            }	
          },	
          "node_modules/touch": {	
            "version": "3.1.0",	
            "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",	
            "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",	
            "dev": true,	
            "dependencies": {	
              "nopt": "~1.0.10"	
            },	
            "bin": {	
              "nodetouch": "bin/nodetouch.js"	
            }	
          },	
          "node_modules/tree-kill": {	
            "version": "1.2.2",	
            "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",	
            "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",	
            "dev": true,	
            "bin": {	
              "tree-kill": "cli.js"	
            }	
          },	
          "node_modules/ts-node": {	
            "version": "10.9.2",	
            "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",	
            "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",	
            "devOptional": true,	
            "dependencies": {	
              "@cspotcode/source-map-support": "^0.8.0",	
              "@tsconfig/node10": "^1.0.7",	
              "@tsconfig/node12": "^1.0.7",	
              "@tsconfig/node14": "^1.0.0",	
              "@tsconfig/node16": "^1.0.2",	
              "acorn": "^8.4.1",	
              "acorn-walk": "^8.1.1",	
              "arg": "^4.1.0",	
              "create-require": "^1.1.0",	
              "diff": "^4.0.1",	
              "make-error": "^1.1.1",	
              "v8-compile-cache-lib": "^3.0.1",	
              "yn": "3.1.1"	
            },	
            "bin": {	
              "ts-node": "dist/bin.js",	
              "ts-node-cwd": "dist/bin-cwd.js",	
              "ts-node-esm": "dist/bin-esm.js",	
              "ts-node-script": "dist/bin-script.js",	
              "ts-node-transpile-only": "dist/bin-transpile.js",	
              "ts-script": "dist/bin-script-deprecated.js"	
            },	
            "peerDependencies": {	
              "@swc/core": ">=1.2.50",	
              "@swc/wasm": ">=1.2.50",	
              "@types/node": "*",	
              "typescript": ">=2.7"	
            },	
            "peerDependenciesMeta": {	
              "@swc/core": {	
                "optional": true	
              },	
              "@swc/wasm": {	
                "optional": true	
              }	
            }	
          },	
          "node_modules/ts-node-dev": {	
            "version": "2.0.0",	
            "resolved": "https://registry.npmjs.org/ts-node-dev/-/ts-node-dev-2.0.0.tgz",	
            "integrity": "sha512-ywMrhCfH6M75yftYvrvNarLEY+SUXtUvU8/0Z6llrHQVBx12GiFk5sStF8UdfE/yfzk9IAq7O5EEbTQsxlBI8w==",	
            "dev": true,	
            "dependencies": {	
              "chokidar": "^3.5.1",	
              "dynamic-dedupe": "^0.3.0",	
              "minimist": "^1.2.6",	
              "mkdirp": "^1.0.4",	
              "resolve": "^1.0.0",	
              "rimraf": "^2.6.1",	
              "source-map-support": "^0.5.12",	
              "tree-kill": "^1.2.2",	
              "ts-node": "^10.4.0",	
              "tsconfig": "^7.0.0"	
            },	
            "bin": {	
              "ts-node-dev": "lib/bin.js",	
              "tsnd": "lib/bin.js"	
            },	
            "engines": {	
              "node": ">=0.8.0"	
            },	
            "peerDependencies": {	
              "node-notifier": "*",	
              "typescript": "*"	
            },	
            "peerDependenciesMeta": {	
              "node-notifier": {	
                "optional": true	
              }	
            }	
          },	
          "node_modules/ts-node-dev/node_modules/mkdirp": {	
            "version": "1.0.4",	
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",	
            "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",	
            "dev": true,	
            "bin": {	
              "mkdirp": "bin/cmd.js"	
            },	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/tsconfig": {	
            "version": "7.0.0",	
            "resolved": "https://registry.npmjs.org/tsconfig/-/tsconfig-7.0.0.tgz",	
            "integrity": "sha512-vZXmzPrL+EmC4T/4rVlT2jNVMWCi/O4DIiSj3UHg1OE5kCKbk4mfrXc6dZksLgRM/TZlKnousKH9bbTazUWRRw==",	
            "dev": true,	
            "dependencies": {	
              "@types/strip-bom": "^3.0.0",	
              "@types/strip-json-comments": "0.0.30",	
              "strip-bom": "^3.0.0",	
              "strip-json-comments": "^2.0.0"	
            }	
          },	
          "node_modules/tslib": {	
            "version": "2.6.2",	
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.6.2.tgz",	
            "integrity": "sha512-AEYxH93jGFPn/a2iVAwW87VuUIkR1FVUKB77NwMF7nBTDkDrrT/Hpt/IrCJ0QXhW27jTBDcf5ZY7w6RiqTMw2Q=="	
          },	
          "node_modules/type-is": {	
            "version": "1.6.18",	
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",	
            "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",	
            "dependencies": {	
              "media-typer": "0.3.0",	
              "mime-types": "~2.1.24"	
            },	
            "engines": {	
              "node": ">= 0.6"	
            }	
          },	
          "node_modules/typeorm": {	
            "version": "0.3.17",	
            "resolved": "https://registry.npmjs.org/typeorm/-/typeorm-0.3.17.tgz",	
            "integrity": "sha512-UDjUEwIQalO9tWw9O2A4GU+sT3oyoUXheHJy4ft+RFdnRdQctdQ34L9SqE2p7LdwzafHx1maxT+bqXON+Qnmig==",	
            "dependencies": {	
              "@sqltools/formatter": "^1.2.5",	
              "app-root-path": "^3.1.0",	
              "buffer": "^6.0.3",	
              "chalk": "^4.1.2",	
              "cli-highlight": "^2.1.11",	
              "date-fns": "^2.29.3",	
              "debug": "^4.3.4",	
              "dotenv": "^16.0.3",	
              "glob": "^8.1.0",	
              "mkdirp": "^2.1.3",	
              "reflect-metadata": "^0.1.13",	
              "sha.js": "^2.4.11",	
              "tslib": "^2.5.0",	
              "uuid": "^9.0.0",	
              "yargs": "^17.6.2"	
            },	
            "bin": {	
              "typeorm": "cli.js",	
              "typeorm-ts-node-commonjs": "cli-ts-node-commonjs.js",	
              "typeorm-ts-node-esm": "cli-ts-node-esm.js"	
            },	
            "engines": {	
              "node": ">= 12.9.0"	
            },	
            "funding": {	
              "url": "https://opencollective.com/typeorm"	
            },	
            "peerDependencies": {	
              "@google-cloud/spanner": "^5.18.0",	
              "@sap/hana-client": "^2.12.25",	
              "better-sqlite3": "^7.1.2 || ^8.0.0",	
              "hdb-pool": "^0.1.6",	
              "ioredis": "^5.0.4",	
              "mongodb": "^5.2.0",	
              "mssql": "^9.1.1",	
              "mysql2": "^2.2.5 || ^3.0.1",	
              "oracledb": "^5.1.0",	
              "pg": "^8.5.1",	
              "pg-native": "^3.0.0",	
              "pg-query-stream": "^4.0.0",	
              "redis": "^3.1.1 || ^4.0.0",	
              "sql.js": "^1.4.0",	
              "sqlite3": "^5.0.3",	
              "ts-node": "^10.7.0",	
              "typeorm-aurora-data-api-driver": "^2.0.0"	
            },	
            "peerDependenciesMeta": {	
              "@google-cloud/spanner": {	
                "optional": true	
              },	
              "@sap/hana-client": {	
                "optional": true	
              },	
              "better-sqlite3": {	
                "optional": true	
              },	
              "hdb-pool": {	
                "optional": true	
              },	
              "ioredis": {	
                "optional": true	
              },	
              "mongodb": {	
                "optional": true	
              },	
              "mssql": {	
                "optional": true	
              },	
              "mysql2": {	
                "optional": true	
              },	
              "oracledb": {	
                "optional": true	
              },	
              "pg": {	
                "optional": true	
              },	
              "pg-native": {	
                "optional": true	
              },	
              "pg-query-stream": {	
                "optional": true	
              },	
              "redis": {	
                "optional": true	
              },	
              "sql.js": {	
                "optional": true	
              },	
              "sqlite3": {	
                "optional": true	
              },	
              "ts-node": {	
                "optional": true	
              },	
              "typeorm-aurora-data-api-driver": {	
                "optional": true	
              }	
            }	
          },	
          "node_modules/typeorm/node_modules/debug": {	
            "version": "4.3.4",	
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",	
            "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",	
            "dependencies": {	
              "ms": "2.1.2"	
            },	
            "engines": {	
              "node": ">=6.0"	
            },	
            "peerDependenciesMeta": {	
              "supports-color": {	
                "optional": true	
              }	
            }	
          },	
          "node_modules/typeorm/node_modules/ms": {	
            "version": "2.1.2",	
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",	
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="	
          },	
          "node_modules/typescript": {	
            "version": "5.4.4",	
            "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.4.4.tgz",	
            "integrity": "sha512-dGE2Vv8cpVvw28v8HCPqyb08EzbBURxDpuhJvTrusShUfGnhHBafDsLdS1EhhxyL6BJQE+2cT3dDPAv+MQ6oLw==",	
            "devOptional": true,	
            "peer": true,	
            "bin": {	
              "tsc": "bin/tsc",	
              "tsserver": "bin/tsserver"	
            },	
            "engines": {	
              "node": ">=14.17"	
            }	
          },	
          "node_modules/undefsafe": {	
            "version": "2.0.5",	
            "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",	
            "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",	
            "dev": true	
          },	
          "node_modules/undici-types": {	
            "version": "5.25.3",	
            "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.25.3.tgz",	
            "integrity": "sha512-Ga1jfYwRn7+cP9v8auvEXN1rX3sWqlayd4HP7OKk4mZWylEmu3KzXDUGrQUN6Ol7qo1gPvB2e5gX6udnyEPgdA==",	
            "devOptional": true	
          },	
          "node_modules/unpipe": {	
            "version": "1.0.0",	
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",	
            "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/utils-merge": {	
            "version": "1.0.1",	
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",	
            "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",	
            "engines": {	
              "node": ">= 0.4.0"	
            }	
          },	
          "node_modules/uuid": {	
            "version": "9.0.1",	
            "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",	
            "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",	
            "funding": [	
              "https://github.com/sponsors/broofa",	
              "https://github.com/sponsors/ctavan"	
            ],	
            "bin": {	
              "uuid": "dist/bin/uuid"	
            }	
          },	
          "node_modules/v8-compile-cache-lib": {	
            "version": "3.0.1",	
            "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",	
            "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",	
            "devOptional": true	
          },	
          "node_modules/vary": {	
            "version": "1.1.2",	
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",	
            "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",	
            "engines": {	
              "node": ">= 0.8"	
            }	
          },	
          "node_modules/wrap-ansi": {	
            "version": "7.0.0",	
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",	
            "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",	
            "dependencies": {	
              "ansi-styles": "^4.0.0",	
              "string-width": "^4.1.0",	
              "strip-ansi": "^6.0.0"	
            },	
            "engines": {	
              "node": ">=10"	
            },	
            "funding": {	
              "url": "https://github.com/chalk/wrap-ansi?sponsor=1"	
            }	
          },	
          "node_modules/wrappy": {	
            "version": "1.0.2",	
            "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",	
            "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ=="	
          },	
          "node_modules/xtend": {	
            "version": "4.0.2",	
            "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",	
            "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",	
            "engines": {	
              "node": ">=0.4"	
            }	
          },	
          "node_modules/y18n": {	
            "version": "5.0.8",	
            "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",	
            "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",	
            "engines": {	
              "node": ">=10"	
            }	
          },	
          "node_modules/yallist": {	
            "version": "4.0.0",	
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",	
            "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",	
            "dev": true	
          },	
          "node_modules/yargs": {	
            "version": "17.7.2",	
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",	
            "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",	
            "dependencies": {	
              "cliui": "^8.0.1",	
              "escalade": "^3.1.1",	
              "get-caller-file": "^2.0.5",	
              "require-directory": "^2.1.1",	
              "string-width": "^4.2.3",	
              "y18n": "^5.0.5",	
              "yargs-parser": "^21.1.1"	
            },	
            "engines": {	
              "node": ">=12"	
            }	
          },	
          "node_modules/yargs-parser": {	
            "version": "21.1.1",	
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",	
            "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",	
            "engines": {	
              "node": ">=12"	
            }	
          },	
          "node_modules/yn": {	
            "version": "3.1.1",	
            "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",	
            "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",	
            "devOptional": true,	
            "engines": {	
              "node": ">=6"	
            }	
          }	
        }	
      }	
      `;
      return codePackageLock;
    }
  }
  export default PackageLockGenerator;
  