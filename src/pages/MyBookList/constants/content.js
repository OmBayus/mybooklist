// eslint-disable-next-line import/no-anonymous-default-export
export default {
    header: {
        title: (name)=> `${name.charAt(0).toUpperCase() + name.slice(1)} Booklist`,
    },
    filter:{
        statusDropdown: {
            placeHolderText: "Select a Status",
        },
        searchInput: {
            placeHolderText: "Search",
        },
    },
    dialog:{
        header: (isEdit) => isEdit ? "Edit Book" : "Add Book",
        submitLabel: (isEdit) => isEdit ? "Edit" : "Add",
    },
  };
  