/* Para funcionar o linting e conseguir visualizar as variaveis do tema dentro de outros arquivos. 
Necessário também configurar esse arquivo em tsconfig.json */

import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

    colors: {
        primary: string;
        secundary: string;

        background: string;
        text: string;
    },
    }
}