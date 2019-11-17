const fieldList = [{
  prop: 'task_id',
  label: '任务ID',
  width: 300,
  sortable: true,
  is_link: true
}, {
  prop: 'task_type',
  label: '任务类型',
}, {
  prop: 'task_level',
  label: '任务等级',
}, {
  prop: 'province',
  label: '省份',
}, {
  prop: 'city',
  label: '城市',
}, {
  prop: 'task_source',
  label: '任务来源',
}, {
  prop: 'task_flow',
  label: '任务环节',
}, {
  prop: 'rework_flag',
  label: '任务状态',
}, {
  prop: 'update_time',
  label: '任务更新时间',
  width: 200,
  sortable: true,
  format: true
}];

const filterList = [{
  prop: 'task_id',
  layout: 'text'
}, {
  prop: 'task_flow',
  layout: 'select'
}, {
  prop: 'update_time',
  layout: 'datetimerange'
}];

const enumMap = {"camera_type": [{"val": 1, "desc": "\u56fa\u5b9a\u6d4b\u901f\u6444\u50cf\u5934"}, {"val": 2, "desc": "\u975e\u673a\u52a8\u8f66\u8f66\u9053\u6444\u50cf\u5934"}, {"val": 3, "desc": "\u516c\u4ea4\u8f66\u9053\u6444\u50cf\u5934"}, {"val": 4, "desc": "\u95ef\u7ea2\u706f\u6444\u50cf\u5934"}, {"val": 5, "desc": "\u533a\u95f4\u6d4b\u901f\u8d77\u70b9"}, {"val": 6, "desc": "\u533a\u95f4\u6d4b\u901f\u7ec8\u70b9"}, {"val": 7, "desc": "\u8fdd\u7ae0\u76d1\u63a7\u6444\u50cf\u5934"}, {"val": 8, "desc": "\u5e94\u6025\u8f66\u9053\u6444\u50cf\u5934"}, {"val": 9, "desc": "\u5355\u884c\u9053\u6444\u50cf\u5934"}, {"val": 10, "desc": "HOV \u8f66\u9053\u6444\u50cf\u5934"}, {"val": 11, "desc": "\u62c9\u94fe\u5f0f\u8f66\u9053\u6444\u50cf\u5934"}, {"val": 12, "desc": "\u5c3e\u53f7\u9650\u884c\u6444\u50cf\u5934"}, {"val": 13, "desc": "\u8fdb\u4eac\u6444\u50cf\u5934"}, {"val": 14, "desc": "\u79fb\u52a8\u6d4b\u901f\u6444\u50cf\u5934"}, {"val": 15, "desc": "\u8fdd\u6cd5\u9e23\u7b1b\u6444\u50cf\u5934"}, {"val": 16, "desc": "\u516c\u4ea4\u8f66\u7ad9\u6444\u50cf\u5934"}, {"val": 30, "desc": "\u7981\u6b62\u5de6\u53f3\u8f6c"}, {"val": 31, "desc": "\u8fdd\u53cd\u7981\u6b62\u6807\u7ebf"}, {"val": 32, "desc": "\u8fdd\u7ae0\u505c\u8f66"}, {"val": 33, "desc": "\u8d85\u4f4e\u901f"}, {"val": 34, "desc": "\u53ef\u53d8\u9650\u901f"}, {"val": 35, "desc": "\u5206\u8f66\u9053\u9650\u901f"}, {"val": 36, "desc": "\u5206\u8f66\u79cd\u9650\u901f"}, {"val": 37, "desc": "\u8fdd\u89c4\u5360\u8f66\u9053"}, {"val": 38, "desc": "\u8fdd\u89c4\u8fc7\u8def\u53e3"}, {"val": 39, "desc": "\u8fdd\u53cd\u7981\u4ee4\u6807\u5fd7"}, {"val": 40, "desc": "\u8fdd\u89c4\u7528\u706f"}, {"val": 41, "desc": "\u4e0d\u7cfb\u5b89\u5168\u5e26"}, {"val": 42, "desc": "\u5f00\u8f66\u6253\u624b\u673a"}, {"val": 43, "desc": "\u73af\u4fdd\u9650\u884c"}, {"val": 44, "desc": "\u793c\u8ba9\u884c\u4eba"}, {"val": 45, "desc": "\u8f66\u8f86\u672a\u6309\u89c4\u5b9a\u5e74\u68c0"}, {"val": 46, "desc": "\u8f66\u8f86\u5c3e\u6c14\u8d85\u6807"}, {"val": 47, "desc": "\u8def\u51b5\u76d1\u63a7"}, {"val": 48, "desc": "\u51fa\u5165\u53e3\u6444\u50cf\u5934"}, {"val": 49, "desc": "\u7981\u6b62\u6389\u5934\u6444\u50cf\u5934"}], "camera_dir": [{"val": 1, "desc": "\u548c\u6240\u5728\u9053\u8def\u77e2\u91cf\u65b9\u5411\u540c\u5411"}, {"val": 0, "desc": "\u548c\u6240\u5728\u9053\u8def\u77e2\u91cf\u65b9\u5411\u53cd\u5411"}], "camera_road_type": [{"val": 1, "desc": "\u4e3b\u8def"}, {"val": 2, "desc": "\u8f85\u8def"}, {"val": null, "desc": "\u672a\u8c03\u67e5"}], "camera_level": [{"val": 1, "desc": "\u9ad8\u67b6\u4e0a"}, {"val": 2, "desc": "\u9ad8\u67b6\u4e0b"}, {"val": null, "desc": "\u672a\u8c03\u67e5"}], "camera_position": [{"val": 0, "desc": "\u8f66\u5934"}, {"val": 1, "desc": "\u8f66\u5c3e"}, {"val": 2, "desc": "\u672a\u8c03\u67e5"}], "camera_source": [{"val": 0, "desc": "\u672a\u8c03\u67e5"}, {"val": 1, "desc": "SW\u5b9e\u91c7"}, {"val": 2, "desc": "\u8857\u666f\u63d0\u53d6\u6444\u50cf\u5934\u8bbe\u65bd"}, {"val": 3, "desc": "\u5176\u4ed6\u4e09\u65b9"}, {"val": 4, "desc": "\u8def\u6d4b\u53cd\u9988"}, {"val": 5, "desc": "\u5ba2\u6237\u53cd\u9988"}, {"val": 6, "desc": "\u60c5\u62a5\u53cd\u9988"}, {"val": 7, "desc": "\u4f17\u5305"}, {"val": 8, "desc": "SW\u975e\u5b9e\u91c7"}, {"val": 9, "desc": "\u4e09\u65b91-GD"}, {"val": 10, "desc": "\u4e09\u65b92-BD"}], "camera_confidence": [{"val": 0, "desc": "\u672a\u8c03\u67e5"}, {"val": 1, "desc": "\u9ad8"}, {"val": 2, "desc": "\u4e2d"}, {"val": 3, "desc": "\u4f4e"}], "task_flow": [{"val": 0, "desc": "\u5df2\u521b\u5efa"}, {"val": 10, "desc": "\u5f85\u4f5c\u4e1a"}, {"val": 11, "desc": "\u4f5c\u4e1a\u4e2d"}, {"val": 12, "desc": "\u5b8c\u6210\u4f5c\u4e1a"}, {"val": 20, "desc": "\u5f85\u5185\u68c0"}, {"val": 21, "desc": "\u5185\u68c0\u4e2d"}, {"val": 22, "desc": "\u5b8c\u6210\u5185\u68c0"}, {"val": 30, "desc": "\u5f85\u9a8c\u6536"}, {"val": 31, "desc": "\u9a8c\u6536\u4e2d"}, {"val": 32, "desc": "\u5b8c\u6210\u9a8c\u6536"}, {"val": 40, "desc": "\u5f85\u5165\u5e93"}, {"val": 41, "desc": ""}, {"val": 42, "desc": "\u5df2\u5165\u5e93"}, {"val": 99, "desc": "\u65e0\u6548\u4efb\u52a1"}], "task_type": [{"val": 0, "desc": "\u7a0b\u5e8f\u63a5\u5165\t"}, {"val": 1, "desc": "\u4eba\u5de5\u5f55\u5165"}], "source_type": [{"val": 1, "desc": "\u60c5\u62a5\u63a5\u5165\t"}, {"val": 2, "desc": "\u7ba1\u7406\u5458\u6dfb\u52a0\t"}, {"val": 3, "desc": "\u7ba1\u7406\u5458\u5bfc\u5165"}], "task_source": [{"val": 1, "desc": "\u7528\u6237\u53cd\u9988\t"}, {"val": 2, "desc": "\u4e92\u8054\u7f51\u6293\u53d6"}, {"val": 3, "desc": "\u4e3b\u52a8\u7ea0\u9519"}, {"val": 4, "desc": "\u56fe\u50cf\u8bc6\u522b"}, {"val": 5, "desc": "\u8fdd\u7ae0\u7f5a\u5355"}, {"val": 6, "desc": "\u4ea4\u7ba1\u5c40\u5408\u4f5c"}, {"val": 7, "desc": "\u8def\u7f51\u53d8\u66f4\u60c5\u62a5"}], "task_business": [{"val": 1, "desc": "\u7535\u5b50\u773c"}, {"val": 2, "desc": "\u9650\u884c"}, {"val": 3, "desc": "\u6536\u8d39\u6570\u636e"}, {"val": 4, "desc": "\u6b65\u884c\u9a91\u884c"}], "task_level": [{"val": 0, "desc": "\u9ad8"}, {"val": 1, "desc": "\u4e2d"}, {"val": 2, "desc": "\u4f4e"}, {"val": 3, "desc": "\u672a\u5206\u7c7b"}]};

export const taskData = {"list": [{"task_id": "000038cb-56b9-4dea-9456-af60a33f78b8", "accept_time": null, "city": "610600", "create_time": "2019-07-11T20:40:21.047211", "export_no": null, "export_time": null, "product_type": "100", "province": "610000", "source_type": 1, "source_id": "220000000015821207", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-12T14:36:06.740555", "rework_flag": null, "latesteck": null, "y": 35.9254093763, "work_user": {"user_id": 6004, "company": 2, "user_name": "\u57fa\u5730\u9a8c\u6536\u2014\u6768\u9633"}, "x": 108.969489019, "accept_user": null, "user": {"user_id": 6004, "company": null, "user_name": "\u57fa\u5730\u9a8c\u6536\u2014\u6768\u9633"}, "check_user": null}, {"task_id": "00004a5b-cb7c-4a3c-93a7-302b572c2835", "accept_time": null, "city": "654000", "create_time": "2019-07-19T16:23:53.348097", "export_no": null, "export_time": null, "product_type": "100", "province": "0", "source_type": 1, "source_id": "220000000015833872", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-25T20:29:44.721144", "rework_flag": 2, "latesteck": {"taskeck_id": 12961, "check_desc": null, "check_result": null, "create_time": "2019-07-25T20:29:44.721144"}, "y": 43.9684986987, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 81.6372429507, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "00050874-74bb-476b-99ee-c24b0a9dbd18", "accept_time": null, "city": "620900", "create_time": "2019-07-19T16:10:26.835825", "export_no": null, "export_time": null, "product_type": "100", "province": "620000", "source_type": 1, "source_id": "220000000015822940", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-25T20:29:44.721144", "rework_flag": 2, "latesteck": {"taskeck_id": 12960, "check_desc": null, "check_result": 0, "create_time": "2019-07-25T20:29:44.721144"}, "y": 40.4713824923, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 96.6741078624, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "00063a63-111a-414f-a10d-779b130eb7b9", "accept_time": null, "city": "640300", "create_time": "2019-07-19T16:14:36.182992", "export_no": null, "export_time": null, "product_type": "100", "province": "640000", "source_type": 1, "source_id": "220000000015829753", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-25T20:29:44.721144", "rework_flag": 2, "latesteck": {"taskeck_id": 12959, "check_desc": null, "check_result": null, "create_time": "2019-07-25T20:29:44.721144"}, "y": 37.66048, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 106.901483, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "0006c31a-40cd-48ce-a869-bedfa352d14a", "accept_time": null, "city": "620700", "create_time": "2019-07-19T16:09:59.759254", "export_no": null, "export_time": null, "product_type": "100", "province": "620000", "source_type": 1, "source_id": "220000000015826964", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-25T20:29:44.721144", "rework_flag": 2, "latesteck": {"taskeck_id": 12964, "check_desc": null, "check_result": 0, "create_time": "2019-07-25T20:29:44.721144"}, "y": 38.489491, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 101.399094, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "000795bf-7aec-4be3-951f-06c5579e9241", "accept_time": null, "city": "330600", "create_time": "2019-07-19T16:08:26.667385", "export_no": null, "export_time": null, "product_type": "100", "province": "330000", "source_type": 1, "source_id": "220000000015825281", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-19T16:46:51.837485", "rework_flag": null, "latesteck": null, "y": 30.038927, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 120.505583, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": null}, {"task_id": "000845e9-e22e-4d81-a7e4-d12c2c0187d9", "accept_time": null, "city": "320200", "create_time": "2019-07-08T23:32:41.985849", "export_no": null, "export_time": null, "product_type": "100", "province": "320000", "source_type": 1, "source_id": "220000000015806404", "task_business": 1, "task_flow": 21, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-12T15:17:46.252965", "rework_flag": null, "latesteck": null, "y": 31.222196, "work_user": {"user_id": 6005, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u7530\u6715"}, "x": 119.867257, "accept_user": null, "user": {"user_id": 6021, "company": null, "user_name": "xrgong1"}, "check_user": {"user_id": 6021, "company": null, "user_name": "xrgong1"}}, {"task_id": "000b314d-0ff9-4f66-8bf0-e7e2e6c0445c", "accept_time": null, "city": "320200", "create_time": "2019-07-19T10:36:35.559510", "export_no": null, "export_time": null, "product_type": "100", "province": "320000", "source_type": 1, "source_id": "102000000000079270", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-25T20:29:44.721144", "rework_flag": 2, "latesteck": {"taskeck_id": 12962, "check_desc": null, "check_result": null, "create_time": "2019-07-25T20:29:44.721144"}, "y": 31.2808127839, "work_user": {"user_id": 6003, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u59da\u5b5f\u73af"}, "x": 119.55412761, "accept_user": null, "user": {"user_id": 6003, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u59da\u5b5f\u73af"}, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "000c96a0-6760-490b-820e-74d43a545a3f", "accept_time": null, "city": "640500", "create_time": "2019-07-11T21:26:06.619780", "export_no": null, "export_time": null, "product_type": "100", "province": "640000", "source_type": 1, "source_id": "220000000015820375", "task_business": 1, "task_flow": 30, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-25T20:29:44.721144", "rework_flag": null, "latesteck": {"taskeck_id": 12963, "check_desc": null, "check_result": 1, "create_time": "2019-07-25T20:29:44.721144"}, "y": 37.4500523503, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 104.775530423, "accept_user": null, "user": null, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "000dc15a-327a-4200-a73f-b881cb032ae8", "accept_time": null, "city": "654000", "create_time": "2019-07-19T16:14:52.958411", "export_no": null, "export_time": null, "product_type": "100", "province": "0", "source_type": 1, "source_id": "220000000015829189", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-19T16:46:51.925192", "rework_flag": null, "latesteck": null, "y": 43.504311, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 83.284657, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": null}, {"task_id": "000ddbfe-0649-45d3-8003-2364e1cf501b", "accept_time": null, "city": "511500", "create_time": "2019-05-08T13:04:14.097878", "export_no": null, "export_time": null, "product_type": "100", "province": "510000", "source_type": 3, "source_id": "201904231805_15671", "task_business": 1, "task_flow": 42, "task_level": 0, "task_source": 3, "task_type": 1, "update_time": "2019-07-07T17:59:18.728410", "rework_flag": null, "latesteck": {"taskeck_id": 6160, "check_desc": null, "check_result": 1, "create_time": "2019-07-07T17:59:18.728410"}, "y": 28.77595, "work_user": {"user_id": 1001, "company": 1, "user_name": "jessieyi"}, "x": 104.72168, "accept_user": {"user_id": 1001, "company": 1, "user_name": "jessieyi"}, "user": null, "check_user": {"user_id": 1004, "company": null, "user_name": "jessieyi_test"}}, {"task_id": "000f3ac3-80a9-4d21-a126-d1304d5cf9c2", "accept_time": null, "city": "350600", "create_time": "2019-07-11T17:54:09.493448", "export_no": null, "export_time": null, "product_type": "100", "province": "350000", "source_type": 1, "source_id": "220000000015818973", "task_business": 1, "task_flow": 21, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-17T13:46:06.592233", "rework_flag": null, "latesteck": null, "y": 24.856532, "work_user": {"user_id": 6017, "company": 1, "user_name": "v_xrgong"}, "x": 117.253033, "accept_user": null, "user": {"user_id": 1004, "company": null, "user_name": "jessieyi_test"}, "check_user": {"user_id": 1004, "company": null, "user_name": "jessieyi_test"}}, {"task_id": "000f84a0-65d2-4c0d-94e7-01ba23698330", "accept_time": null, "city": "371300", "create_time": "2019-05-08T13:04:13.950804", "export_no": null, "export_time": null, "product_type": "100", "province": "370000", "source_type": 3, "source_id": "201904231805_14196", "task_business": 1, "task_flow": 42, "task_level": 0, "task_source": 3, "task_type": 1, "update_time": "2019-07-07T18:17:46.940582", "rework_flag": null, "latesteck": {"taskeck_id": 6206, "check_desc": null, "check_result": 1, "create_time": "2019-07-07T18:17:46.940582"}, "y": 35.14541, "work_user": {"user_id": 1001, "company": 1, "user_name": "jessieyi"}, "x": 119.08688, "accept_user": {"user_id": 1001, "company": 1, "user_name": "jessieyi"}, "user": null, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "0013252a-ce0d-4f2a-ab33-641bdfe405f9", "accept_time": null, "city": "610700", "create_time": "2019-07-19T16:48:56.312906", "export_no": null, "export_time": null, "product_type": "100", "province": "610000", "source_type": 1, "source_id": "220000000015849900", "task_business": 1, "task_flow": 20, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-08-02T11:19:32.931751", "rework_flag": null, "latesteck": null, "y": 33.2341109168, "work_user": {"user_id": 6023, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u5218\u5b50\u7545"}, "x": 107.17747329, "accept_user": null, "user": null, "check_user": null}, {"task_id": "001389b2-48f5-4ea8-a1ef-1f4f027074df", "accept_time": null, "city": "640500", "create_time": "2019-07-19T16:16:12.729013", "export_no": null, "export_time": null, "product_type": "100", "province": "640000", "source_type": 1, "source_id": "220000000015830126", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-19T16:46:52.012397", "rework_flag": null, "latesteck": null, "y": 37.276773, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 104.928757, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": null}, {"task_id": "0013a1fe-6520-4485-a351-21de02a8188b", "accept_time": null, "city": "320200", "create_time": "2019-07-19T10:38:56.227806", "export_no": null, "export_time": null, "product_type": "100", "province": "320000", "source_type": 1, "source_id": "102000000000079477", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-25T20:29:44.721144", "rework_flag": 2, "latesteck": {"taskeck_id": 12958, "check_desc": null, "check_result": 0, "create_time": "2019-07-25T20:29:44.721144"}, "y": 31.8954402301, "work_user": {"user_id": 6003, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u59da\u5b5f\u73af"}, "x": 120.207629008, "accept_user": null, "user": {"user_id": 6003, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u59da\u5b5f\u73af"}, "check_user": {"user_id": 1001, "company": null, "user_name": "jessieyi"}}, {"task_id": "00140671-5233-4b79-8bd1-fb328fee74bb", "accept_time": null, "city": "152900", "create_time": "2019-07-19T16:45:31.249153", "export_no": null, "export_time": null, "product_type": "100", "province": "150000", "source_type": 1, "source_id": "220000000015847538", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-19T16:46:52.099603", "rework_flag": null, "latesteck": null, "y": 38.478533, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 105.652983, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": null}, {"task_id": "00162d1b-d38a-427e-aae5-d541dca4884c", "accept_time": null, "city": "441400", "create_time": "2019-07-19T16:31:00.834352", "export_no": null, "export_time": null, "product_type": "100", "province": "440000", "source_type": 1, "source_id": "220000000015837928", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-19T16:46:52.186909", "rework_flag": null, "latesteck": null, "y": 24.4465886507, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 115.766893095, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": null}, {"task_id": "0017f4ce-4221-4f8c-80d6-1cbafdf5c895", "accept_time": null, "city": "0", "create_time": "2019-07-19T16:26:35.901405", "export_no": null, "export_time": null, "product_type": "100", "province": "540000", "source_type": 1, "source_id": "220000000015836114", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-19T16:46:52.274517", "rework_flag": null, "latesteck": null, "y": 31.498461, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 92.155756, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": null}, {"task_id": "00183ec7-6eb4-45c0-b005-961b3ac2fdb9", "accept_time": null, "city": "320200", "create_time": "2019-07-19T16:06:04.327999", "export_no": null, "export_time": null, "product_type": "100", "province": "320000", "source_type": 1, "source_id": "220000000015825425", "task_business": 1, "task_flow": 11, "task_level": 1, "task_source": 4, "task_type": 0, "update_time": "2019-07-19T16:46:52.361522", "rework_flag": null, "latesteck": null, "y": 31.3953973187, "work_user": {"user_id": 6006, "company": 2, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "x": 120.066804992, "accept_user": null, "user": {"user_id": 6006, "company": null, "user_name": "\u57fa\u5730\u751f\u4ea7\u2014\u738b\u6d77\u5170"}, "check_user": null}], "page": 1, "size": 20, "pages": 2670, "total": 53385};

export default {
  url: '/api/task',
  fakeFn: () => {
    return {
      code: 0,
      data: {
        fieldList,
        filterList,
        enumMap,
        taskData
      }
    }
  }
}
