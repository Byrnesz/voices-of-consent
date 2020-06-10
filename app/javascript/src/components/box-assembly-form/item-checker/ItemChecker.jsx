import React from 'react';

const ItemChecker = ({
  type,
  count,
  checked,
  updateCheckStatus,
  enabled
}) => {
  return (
    <div className="item-checker">
      <div className="item-checker__count">{ count }</div>
      <div className="item-checker__name">{ type }</div>
      <div className="item-checker__check-button">
        <input 
          disabled = {enabled ? "" : "disabled"}
          type="checkbox"
          checked={ checked }
          onChange={e => {
            updateCheckStatus();
          }}
        />
      </div>
    </div>
  )
}

export default ItemChecker;