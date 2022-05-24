/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

// styles
import "./style.css";

const HtmlEditor = (props) => {
  const { value, id, onChange, readOnly } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    setText(value || "");
  }, [value]);

  const handleChange = (newText) => {
    setText(newText);
    if (onChange !== null) onChange(newText, id);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];

  return (
    <div className="html-editor">
      <ReactQuill
        formats={formats}
        modules={onChange === null ? { toolbar: [] } : modules}
        className={onChange === null ? "no-toolbar" : ""}
        readOnly={readOnly}
        id={id}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

HtmlEditor.defaultProps = {
  value: "",
  readOnly: false,
  onChange: null,
};

HtmlEditor.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default HtmlEditor;
