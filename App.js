import React, {useState, useEffect} from 'react';
import { StatusBar, View, ScrollView, Alert, StyleSheet } from 'react-native';

import authorsData from "./src/services/service";
import { Author } from "./src/components/Author";
import { AuthorList } from "./src/components/AuthorList";

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
});

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState(null);

  useEffect(() => {
        authorsData.getPosts()
            .then(setPosts)
            .catch(error =>  {
                Alert.alert("Something has wrong (can't get Posts)",
                    `${error.message}`,
                    [{
                    text: "Ok",
                        onPress: () => null,
                        style: "ok"
                    }])
            throw error;});
        authorsData.getAuthors()
            .then(setAuthors)
            .catch(error =>  {
                Alert.alert("Something has wrong (can't get Authors)",
                    `${error.message}`,
                    [{
                        text: "Ok",
                        onPress: () => null,
                        style: "ok"
                    }])
                throw error;});
    }, []);

  const onAuthorSearch = (author) => {
        if (currentAuthor) {
            if (currentAuthor === author.id) {
                return author;
            } else {
                return false
            }

        }
        if (!search) return true;
        return (author.name.toLowerCase().includes(search.toLowerCase()) ||
            author.email.toLowerCase().includes(search.toLowerCase()));
    }
  const handleAuthor = (authorId) => {
        if (currentAuthor) {
            setSearch("");
            setCurrentAuthor(null);
        } else {
            setCurrentAuthor(authorId)
        }
    };

  return (
    <View>
      <StatusBar backgroundColor="#555"/>
      <ScrollView style={styles.scrollView}>
        {currentAuthor ? (
          <Author
            author={authors.find(({id}) => id === currentAuthor)}
            posts={posts.filter(({userId}) => userId === currentAuthor)}
            handleAuthor={handleAuthor}
            isAuthorSelected={true}
          />
        ) : (
          <AuthorList
            authors={authors}
            onAuthorSearch={onAuthorSearch}
            posts={posts}
            handleAuthor={handleAuthor}
            onSearch={setSearch}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default App;
