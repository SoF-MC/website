import Form from "../components/form";
import Head from "next/head";

export class FormPage {
    render() {
        return (
            <div>
                <Head>
                    <title>#SoF - Заявка</title>
                </Head>
                <Form />
            </div>
        );
    }
}

export default new FormPage().render;
