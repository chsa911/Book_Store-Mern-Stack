import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
            /*bookfields12*/
  const [author, setAuthor] = useState('');
  const [keyw1, setKeyw1] = useState('');
  const [kw1Pos, setKw1Pos] = useState('');
  const [keyw2, setKeyw2] = useState('');
  const [kw2Pos, setKw2Pos] = useState('');
  const [keyw3, setKeyw3] = useState('');
  const [kw3Pos, setKw3Pos] = useState('');
  const [publisherB, setPublisherB] = useState('');
  const [pages, setPages] = useState('');
  const [reslt, setReslt] = useState('');
  const [topTt, setTopTt] = useState('');
  const [mark, setMark] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
                  /*bookfields13*/

        setAuthor(response.data.author);
        setKeyw1(response.data.keyw1)
        setKw1Pos(response.data.kw1Pos)
        setKeyw2(response.data.keyw2)
        setKw2Pos(response.data.kw2Pos)
        setKeyw3(response.data.keyw3)
        setKw3Pos(response.data.kw3Pos)
        setPublisherB(response.data.publisherB)
        setPages(response.data.pages)
        setReslt(response.data.reslt)
        setTopTt(response.data.topTt)
        setMark(response.data.mark)

        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
                /*bookfields14*/
      author,
      keyw1,
      kw1Pos,
      keyw2,
      kw2Pos,
      keyw3,
      kw3Pos,
      publisherB,
      pages,
      reslt,
      topTt,
      mark,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
              /*bookfields15*/

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Keyword</label>
          <input
            type='text'
            value={keyw1}
            onChange={(e) => setKeyw1(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>kwPos</label>
          <input
            type='text'
            value={kw1Pos}
            onChange={(e) => setKw1Pos(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Keyword</label>
          <input
            type='text'
            value={keyw2}
            onChange={(e) => setKeyw2(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>kwPos</label>
          <input
            type='text'
            value={kw2Pos}
            onChange={(e) => setKw2Pos(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Keyword</label>
          <input
            type='text'
            value={keyw3}
            onChange={(e) => setKeyw3(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>kwPos</label>
          <input
            type='text'
            value={kw3Pos}
            onChange={(e) => setKw3Pos(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publisher</label>
          <input
            type='text'
            value={publisherB}
            onChange={(e) => setPublisherB(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Pages</label>
          <input
            type='number'
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Pages</label>
          <input
            type='number'
            value={reslt}
            onChange={(e) => setReslt(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Pages</label>
          <input
            type='number'
            value={topTt}
            onChange={(e) => setTopTt(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Pages</label>
          <input
            type='number'
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook