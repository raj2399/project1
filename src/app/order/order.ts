export class ord{
  constructor(public o_id:number,
    public o_status:string,
    public o_date?:string,
    public amount?:number,
  public fk_c_id?:string,
  public fk_p_id?:number)
  {
  }
}
