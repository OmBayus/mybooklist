import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Rating } from "primereact/rating";
import statusOptions from "../constants/status.options";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ book, onChangeForm }) => {
  return (
    <div>
      <label htmlFor="name" className="block text-900 font-medium mb-2">
        Name
      </label>
      <InputText
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        className="w-full mb-3"
        onChange={onChangeForm}
        value={book.name}
      />

      <label htmlFor="author" className="block text-900 font-medium mb-2">
        Author
      </label>
      <InputText
        id="author"
        name="author"
        type="text"
        placeholder="Author"
        className="w-full mb-3"
        onChange={onChangeForm}
        value={book.author}
      />

      <label htmlFor="status" className="block text-900 font-medium mb-2">
        Status
      </label>
      <Dropdown
        id="status"
        options={statusOptions}
        placeholder="Select a Status"
        className="w-full mb-3"
        onChange={(e) =>
          onChangeForm({ target: { name: "status", value: e.value } })
        }
        value={book.status}
      />

      {book.status === "done" && (
        <>
          <label htmlFor="rate" className="block text-900 font-medium mb-2">
            Rate
          </label>
          <div className="my-4">
            <Rating
              value={book.rate}
              onChange={(e) =>
                onChangeForm({ target: { name: "rate", value: e.value } })
              }
              cancel={false}
            />
          </div>
          <label htmlFor="review" className="block text-900 font-medium mb-2">
            Review
          </label>
          <InputTextarea
            id="review"
            name="review"
            type="text"
            placeholder="Review"
            className="w-full mb-3"
            onChange={onChangeForm}
            value={book.review}
          />
        </>
      )}
      <input type="submit" className="hidden" />
    </div>
  );
};
