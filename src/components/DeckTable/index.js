import React from 'react';
import TableRow from './TableRow';
import StyledDecksTable from './deckTable.style';

const DecksTable = ({ decks = [], refetchDecks }) => {
  if (!decks.length) return null;

  return (
    <StyledDecksTable>
      <thead>
        <tr className="tabTitle">
          <th>Name</th>
          <th>Type</th>
          <th>Due</th>
          <th>New</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          decks.map((deck, i) => (
            <TableRow key={i} deck={deck} refetchDecks={refetchDecks} />
          ))
        }
      </tbody>
    </StyledDecksTable>
  );
};

export default DecksTable;

