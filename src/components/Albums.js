import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import "../CSS/Album.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

//Fetching API
const Albums = (props) => {
  const { albums, handleChangeAlbum } = props;

  //Delete API
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        let updatedAlbums = albums.filter((album) => album.id !== id);
        alert("Album Deleted Successfully");
        handleChangeAlbum(updatedAlbums);
      });
    });
  };

  //Upadte API
  const mappedAlbum = albums
    .sort((a, b) => a.id - b.id)
    .map((album, index) => {
      return (
        <tr key={album.id}>
          <td className="text-center">{index + 1}</td>
          <td className="text-center" colSpan="2">
            {album.title}
          </td>
          <td className="text-center">
            <Button size="sm" className="mb-4">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/album/${album.id}`}
              >
                Update
              </Link>
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => deleteUser(album.id)}
              className="mb-4"
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

  //Spinner animation in case of API takes time to loading
  const spinner = (
    <tr>
      <td colSpan="4" className="text-center">
        <Spinner variant="info" animation="grow" />
      </td>
    </tr>
  );

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center" colSpan="2">
              Album Name
            </th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>{mappedAlbum.length > 0 ? mappedAlbum : spinner}</tbody>
      </Table>
    </div>
  );
};

export default Albums;
