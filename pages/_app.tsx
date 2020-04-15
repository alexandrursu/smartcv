import GlobalStyles from '../components/GlobalStyles';
import '@shopify/polaris/styles.css';

export default ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyles>
                <Component {...pageProps} />
            </GlobalStyles>
        </>
    );
};
