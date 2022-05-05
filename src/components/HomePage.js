import React, {useState, useEffect} from 'react';

import { Select } from './Select';
import sorting from 'models/sorting';

import { Container, Content, Title, SecondaryText, TitleBar, CoverImage, BaseContainer } from 'styles';

export const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [currentEndpoint, setCurrentEndpoint] = useState('All books');

    const endpoints = [
        'All books',
        'Ratings',
        'Book id'
    ]

    const fetchBooks = async () => {
        // setLoading(true);
        const response = await fetch(
        "https://project-express-api-w17.herokuapp.com/books"
        );
        const data = await response.json();
        setBooks(data.data);
        await console.log(books)
        // setLoading(false);
    };

    const fetchRating = async (number) => {
        // setLoading(true);
        const response = await fetch(
        `https://project-express-api-w17.herokuapp.com/ratings/${number}`
        );
        const data = await response.json();
        setBooks(data.data);
        await console.log(books)
        // setLoading(false);
    };

    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    const AllBooks = () => {
        const longestBooks = sorting(books, 'num_pages', 'des')
        return (
            longestBooks.map((book) => {
                return (
                    <Container key={book.bookID}>
                        {/* <CoverImage src={'https://picsum.photos/100'}/> */}
                        <Content>
                            <TitleBar>
                                <Title>{book.title}</Title>
                            </TitleBar>
                            
                            <SecondaryText>{book.authors}</SecondaryText>
                            <SecondaryText>{book.num_pages}</SecondaryText>
                        </Content>
                    </Container>
                )
            })
        )
    };

    return (
        <BaseContainer>
            <Select endpoints={endpoints} setCurrentEndpoint={setCurrentEndpoint}/>

            {books.length > 0 &&
                <AllBooks />
            }
        </BaseContainer>
    )
};
