import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
 {/*bookfields17*/}

      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>N</th>
          <th className='border border-slate-600 rounded-md'>Aut</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            K1
          </th>
             <th className='border border-slate-600 rounded-md max-md:hidden'>
            P
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            K2
          </th>
             <th className='border border-slate-600 rounded-md max-md:hidden'>
            P
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            K3
          </th>
             <th className='border border-slate-600 rounded-md max-md:hidden'>
            P.
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Ver.          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            St.
          </th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>
            E.
          </th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>
Tt.
          </th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>
Ed.
          </th>   <th className='border border-slate-600 rounded-md max-md:hidden'>
                Vw.
                          </th> <th className='border border-slate-600 rounded-md max-md:hidden'>
Vfd.
          </th>
  <th className='border border-slate-600 rounded-md max-md:hidden'>
Mk.
          </th>

          <th className='border border-slate-600 rounded-md'>Bear.</th>
        </tr>
      </thead>
 {/*bookfields18*/}

      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.keyw1}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.kw1Pos}
            </td>       <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.keyw2}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.kw2Pos}
            </td>       <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.keyw3}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.kw3Pos}
            </td>
 <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.publisherB}
            </td>

            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.pages}
            </td> <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {book.reslt}
                      </td> <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.topTitel}
            </td> <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.entdat}
            </td> <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.voewuerdig}
            </td> <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.voedatum}
            </td>
             <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.mark}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
