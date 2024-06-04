//package org.example.kttravel.model;
//
//public class test {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "tour_id")
//    private int id;
//    private String tour_name;
//    private Date start_date;
//    private Date end_date;
//    private Date focus_time;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "departure_city_id", referencedColumnName = "city_id")
//    private City departure;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "destination_city_id", referencedColumnName = "city_id")
//    private City destination;
//
//    private byte[] img_1;
//    private byte[] img_2;
//    private byte[] img_3;
//    private byte[] img_4;
//    private int quantity;
//}