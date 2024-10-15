import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";

import { useGetNotesQuery } from "./notesApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

const NewNote = () => {
  const { users } = useGetNotesQuery("notesList", {
    selectFromResult: ({ data }) => ({
      users: selectAllUsers(data),
    }),
  });

  if (!users?.length) return <PulseLoader color={"#FFF"} />;

  const content = <NewNoteForm users={users} />;

  return content;
};
export default NewNote;
