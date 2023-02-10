@extends('layouts.admin')

@section('title')
Riwayat Pesanan
@endsection

@section('container')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Riwayat Pesanan
                        <a href="{{ url('orders') }} " class="btn btn-warning link-menu float-end">Pesanan</a>
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-border text-center">
                        <thead>
                            <tr>
                                <th>Tgl Pesanan</th>
                                <th>Pelacakan Nomor</th>
                                <th>Total Belanja</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($orders as $order)
                        
                           
                            <tr>
                                <td>{{ date('d-m-y', strtotime($order->created_at)) }}</td>
                                <td>{{ $order->tracking_no }}</td>
                               
                                {{-- <td>{{ $order->products->name }}</td>
                                <td>{{ $order->orders_items->prod_qty }}</td> --}}
                                <td>{{ $order->total_price }}</td>
                                <td>{{ $order->status  == '0'  ?'pending' : 'selesai'}}</td>
                                <td><a href="{{ url ('admin/tampilan-pesanan/'.$order->id )}}" class="btn btn-primary">View</a></td>
                            
                                     
                            </tr>
                           
                           
                            @endforeach
                        </tbody>
                        
                    </table> 
                </div>
            </div>
        </div>
    </div>
</div>
    
    
@endsection