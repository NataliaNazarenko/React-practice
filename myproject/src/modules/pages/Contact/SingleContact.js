import { useParams } from "react-router-dom";
import { useContext } from "react";
import { getContactById } from "../../api/api";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../../context/AuthContext";

const SingleContact = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);  // Створюємо стан для збереження даних
    const [loading, setLoading] = useState(true);  // Стан для відстеження завантаження

    // const value = useContext(AuthContext);
    // console.log(value);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getContactById(id);  // Використовуємо await для асинхронного виклику
                setData(result);  // Зберігаємо результат у стан
            } catch (error) {
                console.error("Error fetching contact:", error);
            } finally {
                setLoading(false);  // Вимикаємо стан завантаження
            }
        };

        fetchData();
    }, [id]);  // Викликаємо useEffect кожного разу, коли змінюється id

    if (loading) {
        return <Loader loading={loading} />;  // Відображаємо компонент завантаження
    }

    if (!data) {
        return <div>No data found</div>;  // Якщо дані не отримано
    }

    return (
        <div>
            <p>Single Contact:</p>
            <p>Name: {data.name}</p>
            <p>LastName: {data.lastName}</p>
            <p>About: {data.about}</p>
        </div>
    );
};

export default SingleContact;