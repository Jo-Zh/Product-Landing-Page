import React from "react";
const MyForm = () => {
  return (
    <form id="form">
      <label>Select a Package to inquire</label>
      <select id="selection">
        <option value="">--</option>
        <option value="Package A">Package A</option>
        <option value="Package B">Package B</option>
        <option value="Package C">Package C</option>
      </select>
      <input type="hidden" id="submitpackage" name="submitpackage" />
      <label>Your recipe will send through</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="enter email here..."
        required
      />
      <label>Any comments:</label>
      <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
      <div>
        <input type="reset" value="Reset" />
        <input id="submit" type="submit" value="Get Recipe" />
      </div>
    </form>
  );
};
export default MyForm;
