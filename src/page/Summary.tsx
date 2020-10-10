import React, { useState } from 'react';

class Row {
  rowHeader: string
  values = new Array<number>(12).fill(0)
  sum = 0
  isEditable = true

  constructor(rowHeader: string) {
    this.rowHeader = rowHeader
  }

  nextState(i: number, value: string) {
    const nextState = new Row(this.rowHeader)
    nextState.values = this.values
    nextState.values[i] = Number(value)
    nextState.sum = nextState.values.reduce((acc, x) => acc + x)
    return nextState
  }
}

export function Summary() {
  const rows = [
    useState(new Row('銀行回収資料')),
    useState(new Row('振込賃料')),
    useState(new Row('更新料')),
    useState(new Row('')),
    useState(new Row('')),
    useState(new Row('')),
    useState(new Row('その他収入')),
    useState(new Row('収入計')),
    useState(new Row('広告料')),
    useState(new Row('補修費')),
    useState(new Row('共用灯電気代')),
    useState(new Row('銀行手数料')),
    useState(new Row('郵便手数料')),
    useState(new Row('')),
    useState(new Row('管理費')),
    useState(new Row('その他支出')),
    useState(new Row('振込手数料')),
    useState(new Row('支払計')),
    useState(new Row('収支合計')),
    useState(new Row('備考'))
  ]

  return (
    <table>
      <caption>年間収支一覧表</caption>
      <thead>
        <tr>
          { ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '合計（円）'].map(x => <th style={{whiteSpace: "nowrap"}}>{x}</th> ) }
        </tr>
      </thead>
      <tbody>
        {
          rows.map(z => {
            const [x, setState] = z
            return (
              <tr>
                <th style={{whiteSpace: "nowrap"}}>{x.rowHeader}</th>
                { x.values.map((y, i) => <td>{x.isEditable ? <input type="number" onChange={(e) => setState(x.nextState(i, e.target.value)) } /> : y}</td> ) }
                <td>{x.sum}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}
