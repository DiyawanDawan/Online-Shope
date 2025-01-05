import ClipLoader from "react-spinners/ClipLoader";
const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '100px auto',
    }
    return (
        <ClipLoader color="#5CB338" loading={loading} cssOverride={override}
            size={150} />
    )
}

export default Spinner