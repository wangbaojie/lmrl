/*
-------------------------------------------------------------------------
  ˵��:
  ��ʽʹ��ʱ���԰Ѹ��ļ���ע��ȫ��ȥ������ʡ����ʱ��
  ckplayer6.7,�����������http://www.ckplayer.com
  ��ע�⣬���ļ�ΪUTF-8���룬����Ҫ�ı���뼴��ʹ���ڸ��ֱ�����ʽ����վ��	
-------------------------------------------------------------------------
��һ���֣����ز��
����Ϊ���صĲ������
��������ò���˵����
	1���������
	2��ˮƽ���뷽ʽ��0��1�У�2�ң�
	3����ֱ���뷽ʽ��0�ϣ�1�У�2�£�
	4��ˮƽ����λ��ƫ����
	5����ֱ����λ��ƫ����
	6������ĵȼ���0=��ͨͼƬ����Ҹ�����������ض����أ���ʾ����ʾ��1=��ͨͼƬ�����������ʾ��2=swf�����Ĭ����ʾ��3=swf�����Ĭ�����أ�swf��������Խ���
	7������Ƿ���ڿ������ϣ�0���󶨣�1�󶨣���ֵ��1��ʱ��ò���������ſ�����һ�����ػ򻺶�
	8�����Ϊswf���ҿɽ���ʱ��Ĭ�ϵ��õ������ڵİ����ƣ���ϸ˵�����Ե������ֲ���鿴��Ĭ����
	������Ʋ�����ͬ���Դ˵���ϸ˵���뵽��վ�鿴
*/
function ckcpt() {
    var cpt = '';
    cpt += 'right.swf,2,1,0,0,3,0|'; //�ұ߿��صƣ�����������ť�Ĳ��
    cpt += 'share.swf,1,1,-180,-100,3,0|'; //������
    cpt += 'adjustment.swf,1,1,-180,-100,3,0|'; //������С����ɫ�Ĳ��
    return cpt;
}
/*
����Ķ������
�����ǶԲ��������ܽ�������
*/
function ckstyle() { //�����ܵķ��
    var ck = {
        cpath: '',
        /*
		���������ѹ�����ļ���·����Ĭ�ϵ���style.swf
		������ò����������������óɾ���·������
		�����֪��·������ʹ�õ���Ĭ�����ã�����ֱ�����գ���������
		*/
        language: '',
        /*��������ʹ�õ����������ļ�����Ҫ�Ͳ�������ͬĿ¼�£�Ĭ����language.xml*/
        flashvars: '',
        /*
		������������Ϊ��flashvarsֵ�Ĳ��䣬����c��x����������������ö������������������
		                          1 1 1 1   1 1 1 1 1 1 2 2 2  2 2 2 2 2    2 2 3 3 3 3 3 3 3 3 3   3 4  4 4 4
       			1 2 3 4 5 6 7 8 9 0 1 2 3   4 5 6 7 8 9 0 1 2  3 4 5 6 7    8 9 0 1 2 3 4 5 6 7 8   9 0  1 2 3*/
        setup: '1,1,1,1,1,2,0,1,0,3,0,1,200,0,2,1,0,1,1,1,2,10,3,0,1,2,3000,0,0,0,0,1,1,1,1,1,1,250,0,90,0,0,0',
        /*
		���������ļ���Ƚ���Ҫ��һ������������N�����ܿ��Ʋ����������Ժ����������ӣ������Ʋ�����Ӣ�Ķ���(,)�����������г���������˵����
			1����꾭����ť�Ƿ�ʹ�����ͣ�0��ͨ��꣬1������꣬2��ֻ�а�ť���ͣ�3�ǿ���������
			2���Ƿ�֧�ֵ�����ͣ��0��֧�֣�1��֧��
			3���Ƿ�֧��˫��ȫ����0��֧�֣�1��֧��
			4���ڲ���ǰ�ù��ʱ�Ƿ�ͬʱ������Ƶ��0�����أ�1����
			5�������ʾ�Ĳο�����0�ǲο���Ƶ����1�ǲο�����������
			6������С�ĵ�����ʽ,ֻ���swf��ͼƬ��Ч,��Ƶ���Զ����ŵ�
				=0���Զ�������С����˼��˵��Ļ��ͱ�С��С�Ļ��ͱ��
				=1�Ǵ�Ļ���С��С�Ļ�����
				=2��ʲôҲ���䣬����ô��
				=3�Ǹ��ο�����(��5������)�������õ�һ�����
			7��ǰ�ù�沥��˳��0��˳�򲥷ţ�1��������ţ�>1�����ȡ���й���е�(N-1)�����в���
			8��������Ƶ����Ƿ����������0�ǲ�ʹ�ã�1��ʹ�ã������1�����û���������������»ᰴ�趨�ĵ���ʱ���в��Ź�棬��ʱ���������Ƭ���Ƚ����Ի��������ó�0�Ļ�����ǿ�Ʋ���������ܲ�����Ƭ
			9���Ƿ����������ֹ�棬0�ǲ�������1�ǿ����Ҳ�ʹ�ùرհ�ť��2�ǿ�������ʹ�ùرհ�ť���������ڼ�����Ƶ��ʱ����ع������ֹ��
			10����Ƶ�ĵ�����ʽ
				=0���Զ�������С����˼��˵��Ļ��ͱ�С��С�Ļ��ͱ��ͬʱ���ֳ����������
				=1�Ǵ�Ļ���С��С�Ļ�����
				=2��ʲôҲ���䣬����ô��
				=3�Ǹ��ο�����(pm_video������)�������õ�һ�����
			11���Ƿ��ڶ���Ƶʱ�ֶμ��أ�0���ǣ�1��
			12��������Ƶʱ�Ƿ����ƽ������0���ǣ�1��
			13����Ƶ����ʱ��,��λ������,���鲻����300
			14����ʼͼƬ������ʽ(
				=0���Զ�������С����˼��˵��Ļ��ͱ�С��С�Ļ��ͱ��ͬʱ���ֳ����������
				=1�Ǵ�Ļ���С��С�Ļ�����
				=2��ʲôҲ���䣬����ô��
				=3�Ǹ�pm_video�������õ�һ�����
			15����ͣ��������ʽ(
				=0���Զ�������С����˼��˵��Ļ��ͱ�С��С�Ļ��ͱ��ͬʱ���ֳ����������
				=1�Ǵ�Ļ���С��С�Ļ�����
				=2��ʲôҲ���䣬����ô��
				=3�Ǹ�pm_video�������õ�һ����
			16����ͣ����Ƿ�ʹ�ùرչ�����ã�0��ʹ�ã�1ʹ��
			17������ʱ�Ƿ񲥷Ź�棬0�ǲ���ʾ��1����ʾ��ͬʱ���ص�����ͼ��ͽ��ȣ�2����ʾ�������ػ���ͼ��
			18���Ƿ�֧�ּ��̿ո�����Ʋ��ź���ͣ0��֧�֣�1֧��
			19���Ƿ�֧�ּ������ҷ�������ƿ������0��֧�֣�1֧��
			20���Ƿ�֧�ּ������·������������0��֧�֣�1֧��
			21������������js���������ĵȼ���0-2,�ȼ�Խ�ߣ����صĲ���Խ��
				0�Ƿ����������ý���
				1���ز������ڲ��ŵ�ʱ��Ĳ����������ع��֮��Ĳ���
				2����ȫ������
				3����ȫ�������������ڲ���ǰ����"������ID->"�����ڶಥ�����ļ���
			22������Ϳ��˵�����
			23��������ͼƬԪ�ؼ���ʧ�����¼��ش���
			24����������Ƥ��ѹ���ļ����ļ��ؽ�����ʾ
			25��ʹ�����ؿ�����ʱ��ʾ�򵥽������Ĺ���,0�ǲ�ʹ�ã�1��ʹ�ã�2��ֻ����ͨ״̬��ʹ��
			26����������������(0�����أ�1ȫ��ʱ���أ�2������
			27��������������ʱʱ�䣬��������뿪����������ٺ�������ؿ�����
			28�����ҹ���ʱ�Ƿ�����޷죬Ĭ��0���ã�1�ǲ�����
			29��0������״̬��1�ǿ�����Ĭ�����أ�����״̬����꾭����������ʾ��������2��һֱ���ؿ�����
			30���ڲ���rtmp��Ƶʱ��ͣ���������Ƿ�����������ӵķ�ʽ,����һ����0-2�����ȼ�
			31����������ַ��ʽ(flashvars��s=1/2ʱ)��ȡ��Ƶ��ַʱ�ǲ���Ĭ��0=get������1=post��ʽ
			32���Ƿ����ò��Ű�ť����ͣ��ť
			33���Ƿ������м���ͣ��ť
			34���Ƿ����þ�����ť
			35���Ƿ�����ȫ����ť
			36���Ƿ����ý��ȵ�����,0�����ã�1�����ã�2��ֻ��ǰ���������϶�����3��ֻ�ܺ��ˣ�4��ֻ��ǰ�����ܻص���һ���϶�ʱ��λ�ã�5�ǿ����ĵط����������϶���
			37���Ƿ����õ�������
			38������ʱ��ļ��������
			39��ǰ��logo������ʾ��ʱ�䣬��λ������
			40��ǰ����Ƶ����Ĭ������
			41����s=3/4ʱ���ز���Ƿ��ѹ��������أ�0���ǣ�1��
			42�����ط���Ƿ���ü��ܷ�ʽ���ͣ��ù�����ͨ�û�����ʹ��
			43����s=1/2ʱ�����õ�ַ��ĵ�ַ�Ƿ�����Ե�ַ������ڵ����ļ�����0���ǣ�1��
		*/
        pm_bg: '0x000000,100,230,180',
        /*����������ı������ã���ע�⣬����ֻ��һ����ʼ�������ã������Ҫ�����ĸĶ��������ı�������С��ߣ���Ҫ�ڷ���ļ����ҵ���ͬ�Ĳ������и��ġ�
		1�����屳����ɫ
		2������͸����
		3����������С���
		4����������С�߶�
		����ֻ�ǳ�ʼ��ʱ�����ã����ռ����겥��������ʾ��Ч����Ҫ��style.swf/style.xml�����øò���
		*/
        //mylogo: 'logo.swf',
		mylogo: 'null',
        /*
		��Ƶ����ǰ��ʾ��logo�ļ�����ʹ�����ó�null����mylogo='null';
		*/
        pm_mylogo: '1,1,-100,-55',
        /*
		��Ƶ����ǰ��ʾ��logo�ļ�(mylogo������)��λ��
		��������е��ĸ���������λ�õķ�ʽȫ������ͳһ����˼������
		1��ˮƽ���뷽ʽ��0����1���У�2����
		2����ֱ���뷽ʽ��0���ϣ�1���У�2����
		3��ˮƽƫ����������˵���������1���������ó�0����룬��3��ƫ�������ó�10�����������10�����أ���һ���������ó�2��ƫ����������õ�����ֵ�ͻ��Ƶ����������棬ֻ�����óɸ�ֵ���У����ó�-1����ť�ͻ��ܵ�����������
		4����ֱƫ���� 
		*/
        //logo: 'cklogo.png',
		logo: 'null',
        /*
		Ĭ�����Ͻ�һֱ��ʾ��logo����ʹ�����ó�null����logo='null';
		*/
        pm_logo: '2,0,-100,20',
        /*
		���������Ͻǵ�logo��λ��
			1��ˮƽ���뷽ʽ��0����1���У�2����
			2����ֱ���뷽ʽ��0���ϣ�1���У�2����
			3��ˮƽƫ����
			4����ֱƫ���� 
		�����ǲ������Դ��Ķ������
		*/
        control_rel: 'related.swf,ckplayer/related.xml,0',
        /*
		��Ƶ������ʾ������Ƶ�Ĳ��
			1����Ƶ���Ž�������ʾ��ؾ�����Ƶ�Ĳ���ļ���ע�⣬��Ƶ�����������ó�3ʱ(��var flashvars={e:3})��Ч����
			2��xml�ļ��ǵ��þ�����Ƶ��ʾ���ļ��������Զ����ļ����ͣ�����asp,php,jsp,.netֻҪ�������xml��ʽ���У�,ʵ��ʹ����һ��Ҫע��ڶ���������·��Ҫ��ȷ
			3�����������������������ļ��ı��룬0��Ĭ�ϵ�utf-8,1��gbk2312 
		*/
        control_pv: 'Preview.swf,105,2000',
        /*
		��ƵԤ�����
			1������ļ�����(�ò��������ľ�����Ƶ�Ĳ�����Ƿ��ڷ��ѹ�������)
			2����������ĸ�(ָ���ǲ���Ķ������������λ��)
			3���ӳ�ʱ��(�ô�������꾭��������ͣ�ٶ��ٺ�������ʾ���)
			����һ��Ҫ������ʱʱ�䣬��Ȼ������ڽ������ϻ�����ʱ��ͻ��ȡ��Ƶ��ַ����Ԥ������ռ��Դ 
		*/
        pm_repc: '',
		/*
		��Ƶ��ַ�滻�����ù�����Ҫ���������򵥼��ܵĹ��ܣ�ʹ�÷����ܼ򵥣���ע�⣬ֻ���fֵ����Ƶ��ַ��ʱ����Ч�������ط�����ʹ�á��������鿴http://www.ckplayer.com/manual.php?id=4#title_25
		*/
        pm_spac: '|',
        /*
		��Ƶ��ַ�������������Ҫ�ǲ��Ŷ����Ƶʱʹ����ͨ���÷�ʽ����ַ���÷�ʽʱʹ�õġ�Ĭ��ʹ��|�������Ƶ��ַ�ﱾ�����|�Ļ���Ҫ��������һ���������ע�⣬��ʹֻ��һ����ƵҲ��Ҫ���á�������ʹ��rtmpЭ�鲥����Ƶ��ʱ�������Ƶ���ڶ༶Ŀ¼�Ļ�������Ҫ�ĳ������ķ��ţ���ΪrtmpЭ�����Ƶ��ַ�༶�Ļ�Ҳ��Ҫ�õ�|��������ַ��ʵ����ַ 
		*/
        pm_fpac: 'file->f',
        /*
		�ò����Ĺ����ǰ��Զ����flashvars��ı����滻��ckplayer���Ӧ�ı�����Ĭ�ϵĲ�������˼�ǰ�flashvars���fileֵ�滻��fֵ����Ϊckplayer��ֻ��fֵ������滻֮�������߸���
		*/
        pm_advtime: '2,0,-110,10,0,300,0',
        /*
		ǰ�ù�浹��ʱ�ı�λ�ã�����ǰ�� ���ʱ�и�����ʱ����ʾ�ı������������ø��ı����λ�úͿ�ߣ����뷽ʽ�ġ�һ��7���������ֱ��ʾ��
			1��ˮƽ���뷽ʽ��0������룬1���м���룬2���Ҷ���
			2����ֱ���뷽ʽ��0���϶��룬1���м���룬2�ǵͲ�����
			3��ˮƽλ��ƫ����
			4����ֱλ��ƫ����
			5�����ֶ��뷽ʽ��0������룬1���м���룬2���Ҷ��룬3��Ĭ�϶���
			6���ı����ϯ
			7���ı���߶� 
		*/
        pm_advstatus: '1,2,2,-200,-40',
        /*
		ǰ�ù�澲����ť��������ťֻ������Ƶ���ʱ��ʾ����ȻҲ���Կ��Ʋ���ʾ 
			1���Ƿ���ʾ0����ʾ��1��ʾ
			2��ˮƽ���뷽ʽ
			3����ֱ���뷽ʽ
			4��ˮƽƫ����
			5����ֱƫ����
		*/
        pm_advjp: '1,1,2,2,-100,-40',
        /*
		ǰ�ù��������水ť��λ��
			1���Ƿ���ʾ0����ʾ��1����ʾ
			2��������ť��������(ֵ0/1,0��ֱ����ת,1�Ǵ���js:function ckadjump(){})
			3��ˮƽ���뷽ʽ
			4����ֱ���뷽ʽ
			5��ˮƽƫ����
			6����ֱƫ����
		*/
        pm_padvc: '2,0,-10,-10',
        /*
		��ͣ���Ĺرհ�ť��λ��
			1��ˮƽ���뷽ʽ
			2����ֱ���뷽ʽ
			3��ˮƽƫ����
			4����ֱƫ����
		*/
        pm_advms: '2,2,-46,-56',
        /*
		�������رհ�ťλ��
			1��ˮƽ���뷽ʽ
			2����ֱ���뷽ʽ
			3��ˮƽƫ����
			4����ֱƫ����
		*/
        pm_zip: '1,1,-20,-8,1,0,0',
        /*
		����Ƥ��ѹ����ʱ��ʾ���ֵ�λ��
			1��ˮƽ���뷽ʽ��0������룬1���м���룬2���Ҷ���
			2����ֱ���뷽ʽ��0���϶��룬1���м���룬2�ǵͲ�����
			3��ˮƽλ��ƫ����
			4����ֱλ��ƫ����
			5�����ֶ��뷽ʽ��0������룬1���м���룬2���Ҷ��룬3��Ĭ�϶���
			6���ı����ϯ
			7���ı���߶�
		*/
        //pm_advmarquee: '1,2,50,-60,50,18,0,0x000000,50,0,20,1,15,2000',
		pm_advmarquee: '1,2,50,-60,50,20,0,0x000000,50,0,20,1,30,2000',
        /*
		�������Ŀ��ƣ�Ҫʹ�õĻ���Ҫ��setup��ĵ�9���������ó�1
		����ֶ������,ǰ���������Ƕ�λ���ƣ���7�����������ö�λ��ʽ(0����Զ�λ��1�����Զ�λ)
		��һ���������7��������0��ʱ����Զ�λ�����ǲ���������仯��ʱ�򣬿�����Ҳ���ű�
			1��Ĭ��1:�м����
			2�������¶��루0���ϣ�1���У�2���£�
			3������ߵľ���
			4��Y��ƫ����
			5�����ұߵľ���
			6���߶�
			7����λ��ʽ
		�ڶ����������7��������1��ʱ�򣬾��Զ�λ�����ǲ���������仯��ʱ�򣬿����������ű䣬���ַ�ʽһ��ʹ���ڿ�������С�����ʱ��
			1�������Ҷ��뷽ʽ��0����1���м䣬2���ң�
			2�������¶��루0���ϣ�1���У�2���£�
			3��xƫ����
			4��yƫ����
			5�����
			6���߶�
			7����λ��ʽ
		������ǰ7������������
			8�������ֹ��ı���ɫ
			9���ñ���ɫ��͸����
			10�����ƹ�������0��ˮƽ�������������ң���1�����¹������������Ϻ����£�
			11���ƶ��ĵ�λʱ�������ƶ���λ��������Ҫ��ʱ��������
			12���ƶ��ĵ�λ����,����ͬ��/�ϣ���������/��
			13�����иߣ�������������ϻ����¹�����ʱ�����ô�
			14���������ϻ����¹���ʱÿ��ֹͣ��ʱ��
		*/
		pm_glowfilter:'1,0x01485d, 100, 6, 3, 10, 1, 0, 0',
		/*�������ֹ���Ƿ���÷����˾�
			1���Ƿ�ʹ�÷����˾���0�ǲ����ã�1��ʹ��
			2��(default = 0xFF0000) �� ������ɫ������ʮ�����Ƹ�ʽ 0xRRGGBB�� Ĭ��ֵΪ 0xFF0000  
			3��(default = 100) �� ��ɫ�� Alpha ͸����ֵ�� ��ЧֵΪ 0 �� 100�� ���磬25 ����͸����Ϊ 25%
			4��(default = 6.0) �� ˮƽģ������ ��ЧֵΪ 0 �� 255�����㣩�� 2 �ĳ˷�ֵ���� 2��4��8��16 �� 32�������Ż��������ٶȱ�����ֵ����  
			5��(default = 6.0) �� ��ֱģ������ ��ЧֵΪ 0 �� 255�����㣩�� 2 �ĳ˷�ֵ���� 2��4��8��16 �� 32�������Ż��������ٶȱ�����ֵ����  
			6��(default = 2) �� ӡ�ǻ��ҳ��ǿ�ȡ� ��ֵԽ�ߣ�ѹӡ����ɫԽ����ҷ����뱳��֮��ĶԱȶ�ҲԽǿ�� ��ЧֵΪ 0 �� 255  
			7��(default = 1) �� Ӧ���˾��Ĵ���
			8��(default = 0) �� ָ�������Ƿ�Ϊ�ڲ෢�⡣ ֵ 1 ָ���������ڲ෢�⡣ ֵ 0 ָ����������෢�⣨������Ե��Χ�ķ��⣩  
			9��(default = 0) �� ָ�������Ƿ�����ڿ�Ч���� ֵΪ 1 ��ʹ���������Ϊ͸��������ʾ�ĵ��ı�����ɫ 
		*/
        advmarquee: escape('{a href="http://www.ckplayer.com"}{font color="#FFFFFF" size="12"}������Է����ֹ�棬������Ĭ��ʹ���������õĹ�����ݣ��������������ʹ�ÿ��������������ݣ��������ҳ����ʵʱ����������ֹ�����ݣ����������������ݣ�Ȼ����ҳ�������ù�溯����{/font}{/a}'),
        /*
		�ô��ǹ������ֹ������ݣ�����������������ã��Ͱ�������ղ�����ҳ����ʹ��js�ĺ�������function ckmarqueeadv(){return '�������'}
		*/
		mainfuntion:'',
		/*
		��flashvars��s=3/4ʱ�����õĺ��������ƣ�Ĭ��Ϊ�գ�����ʱ�����ϵĺ���setAppObj
		*/
		flashplayer:'',
		/*
		��flashvars���s=3/4ʱ��Ҳ���԰�swf�ļ���������
		*/
		calljs:'ckplayer_status,ckadjump,playerstop,ckmarqueeadv',
		/*
			�������Ͳ��Ž���ʱ���õ�js����
		*/
        myweb: escape(''),
        /*
		------------------------------------------------------------------------------------------------------------------
		�������ݲ����ǺͲ����ص����ã���ע�⣬�Զ������Լ������õ�������ʽҪע�⣬��Ҫ��ϵͳ�����ظ�����Ȼ�ͻ��滻��ϵͳ��������ã�ɾ����ز���Ļ�Ҳ����ͬʱɾ����ص�����
		------------------------------------------------------------------------------------------------------------------
		�������ݶ����Զ�������������ã�����Ҳ�����Զ����κ��Լ��Ĳ����Ҫ���õ����ݣ���Ȼ�������ĳ�������ʹ�õĻ���Ҳ����ɾ����ص�����
		------------------------------------------------------------------------------------------------------------------
		*/
        cpt_lights: '1',
		/*
		�ô������Ƿ�ʹ�ÿ��صƣ���right.swf����������,ʹ�ÿ���Ч��ʱ����ҳ���js����function closelights(){};
		*/
        cpt_share: 'ckplayer/share.xml',
        /*
		���������õ������ļ���ַ
		���ò����ʼ
		*/
        cpt_list: ckcpt()
        /*
		ckcpt()�Ǳ��ļ����Ϸ��Ķ������ĺ���
		*/
    }
    return ck;
}
/*
html5���ֿ�ʼ
���´�����֧��html5�ģ�����㲻��Ҫ������ɾ����
html5�����Ĵ����������������ʺ����Ӧ�ã���ӭ����̳���������ĵ�
*/
(function() {
    var CKobject = {
        _K_: function(d){return document.getElementById(d);},
        _T_: false,
		_M_: false,
		_G_: false,
		_Y_: false,
		_I_: null,
		_J_: 0,
		_O_: {},
		uaMatch:function(u,rMsie,rFirefox,rOpera,rChrome,rSafari,rSafari2,mozilla,mobile){
			var match = rMsie.exec(u);
			if (match != null) {
				return {
					b: 'IE',
					v: match[2] || '0'
				}
			}
			match = rFirefox.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = rOpera.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = rChrome.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = rSafari.exec(u);
			if (match != null) {
				return {
					b: match[2] || '',
					v: match[1] || '0'
				}
			}
			match = rSafari2.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = mozilla.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = mobile.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			else {
				return {
					b: 'unknown',
					v: '0'
				}
			}
		},
		browser: function() {
			var u = navigator.userAgent,
			rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
			rFirefox = /(firefox)\/([\w.]+)/,
			rOpera = /(opera).+version\/([\w.]+)/,
			rChrome = /(chrome)\/([\w.]+)/,
			rSafari = /version\/([\w.]+).*(safari)/,
			rSafari2 = /(safari)\/([\w.]+)/,
			mozilla = /(mozilla)\/([\w.]+)/,
			mobile = /(mobile)\/([\w.]+)/;
			var c = u.toLowerCase();
			var d = this.uaMatch(c,rMsie,rFirefox,rOpera,rChrome,rSafari,rSafari2,mozilla,mobile);
			if (d.b) {
				b = d.b;
				v = d.v;
			}
			return {B: b, V: v};
        },
        Platform: function() {
            var w = '';
            var u = navigator.userAgent,
            app = navigator.appVersion;
            var b = {
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
                iPad: u.indexOf('iPad') > -1,
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
				trident: u.indexOf('Trident') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                presto: u.indexOf('Presto') > -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
                webApp: u.indexOf('Safari') == -1
            };
            for (var k in b) {
                if (b[k]) {
                    w = k;
                    break;
                }
            }
            return w;
        },
		isHTML5:function(){
			return !!document.createElement('video').canPlayType;
		},
		getType:function(){
			return this._T_;
		},
        getVideo: function() {
            var v = '';
            var s = this._E_['v'];
            if (s && s.length>1) {
                for (var i = 0; i < s.length; i++) {
                    var a = s[i].split('->');
                    if (a.length >= 1 && a[0] != '') {
                        v += '<source src="' + a[0] + '"';
                    }
                    if (a.length >= 2 && a[1] != '') {
                        v += ' type="' + a[1] + '"';
                    }
                    v += '>';
                }
            }
            return v;
        },
        getVars: function(k) {
			var o=this._A_;
			if (typeof(o) == 'undefined') { 
				return null;
			}
            if (k in o) {
                return o[k];
            } else {
                return null;
            }
        },
        getParams: function() {
            var p = '';
            if (this._A_) {
                if (parseInt(this.getVars('p')) == 1) {
                    p += ' autoplay="autoplay"';
                }
                if (parseInt(this.getVars('e')) == 1) {
                    p += ' loop="loop"';
                }
                if (parseInt(this.getVars('p')) == 2) {
                    p += ' preload="metadata"';
                }
                if (this.getVars('i')) {
                    p += ' poster="' + this.getVars('i') + '"';
                }
            }
            return p;
        },
        getpath: function(z) {
			var f='CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz';
			var w=z.substr(0,1);
			if(f.indexOf(w)>-1 && (z.substr(0,4)==w+'://' || z.substr(0,4)==w+':\\')){
				return z;
			}
            var d = unescape(window.location.href).replace('file:///', '');
            var k = parseInt(document.location.port);
            var u = document.location.protocol + '//' + document.location.hostname;
            var l = '',
            e = '',
            t = '';
            var s = 0;
            var r = unescape(z).split('//');
            if (r.length > 0) {
                l = r[0] + '//'
            }
            var h = 'http|https|ftp|rtsp|mms|ftp|rtmp|file';
            var a = h.split('|');
            if (k != 80 && k) {
                u += ':' + k;
            }
            for (i = 0; i < a.length; i++) {
                if ((a[i] + '://') == l) {
                    s = 1;
                    break;
                }
            }
            if (s == 0) {
                if (z.substr(0, 1) == '/') {
                    t = u + z;
                } else {
                    e = d.substring(0, d.lastIndexOf('/') + 1).replace('\\', '/');
                    var w = z.replace('../', './');
                    var u = w.split('./');
                    var n = u.length;
                    var r = w.replace('./', '');
                    var q = e.split('/');
                    var j = q.length - n;
                    for (i = 0; i < j; i++) {
                        t += q[i] + '/';
                    }
                    t += r;
                }
            } else {
                t = z;
            }
            return t;
        },
        getXhr: function() {
            var x;
            try {
                x = new ActiveXObject('Msxml2.XMLHTTP');
            } catch(e) {
                try {
                    x = new ActiveXObject('Microsoft.XMLHTTP');
                } catch(e) {
                    x = false;
                }
            }
            if (!x && typeof XMLHttpRequest != 'undefined') {
                x = new XMLHttpRequest();
            }
            return x;
        },
		getX: function(){
			var f='ckstyle()';
			if (this.getVars('x') && parseInt(this.getVars('c'))!=1 ) {
				f=this.getVars('x')+'()';
			}
			try {
				if (typeof(eval(f)) == 'object') {
					this._X_ = eval(f);
				}
			} catch(e) {
				try {
					if (typeof(eval(ckstyle)) == 'object') {
						this._X_ = ckstyle();
					}
				} catch(e) {
					this._X_ = ckstyle();
				}
			}
		},
		getSn: function(s, n) {
			if(n>=0){
				return this._X_[s].split(',')[n];
			}
			else{
				return this._X_[s];
			}
        },
		getUrl: function(L, B) {
            var b = ['get', 'utf-8'];
            if (L && L.length == 2) {
                var a = L[0];
                var c = L[1].split('/');
                if (c.length >= 2) {
                    b[0] = c[1];
                }
                if (c.length >= 3) {
                    b[1] = c[2];
                }
                this.ajax(b[0], b[1], a,
                function(s) {
                    var C = CKobject;
                    if (s && s != 'error') {
                        var d = '',
                        e = s;
                        if (s.indexOf('}') > -1) {
                            var f = s.split('}');
                            for (var i = 0; i < f.length - 1; i++) {
                                d += f[i] + '}';
                                var h = f[i].replace('{', '').split('->');
                                if (h.length == 2) {
                                    C._A_[h[0]] = h[1];
                                }
                            }
                            e = f[f.length - 1];
                        }
                        C._E_['v'] = e.split(',');
                        if (B) {
                            C.showHtml5();
                        } else {
                            C.changeParams(d);
                            C.newAdr();
                        }
                    }
                });
            }
        },
        getflashvars: function(s) {
            var v = '',
            i = 0;
            if (s) {
                for (var k in s) {
                    if (i > 0) {
                        v += '&';
                    }
                    if (k == 'f' && s[k] && ! this.getSn('pm_repc',-1)) {
                        s[k] = this.getpath(s[k]);
                        if (s[k].indexOf('&') > -1) {
                            s[k] = encodeURIComponent(s[k]);
                        }
                    }
                    if (k == 'y' && s[k]) {
                        s[k] = this.getpath(s[k]);
                    }
                    v += k + '=' + s[k];
                    i++;
                }
            }
            return v;
        },
        getparam: function(s) {
            var w = '',
            v = '',
            o = {
                allowScriptAccess: 'always',
                allowFullScreen: true,
                quality: 'high',
                bgcolor: '#000'
            };
            if (s) {
                for (var k in s) {
                    o[k] = s[k];
                }
            }
            for (var e in o) {
                w += e + '="' + o[e] + '" ';
                v += '<param name="' + e + '" value="' + o[e] + '" />';
            }
            w = w.replace('movie=', 'src=');
            return {
                w: w,
                v: v
            };
        },
        getObjectById: function(s) {
            if (this._T_) {
                return this;
            }
            var x = null,
            y = this._K_(s),
            r = 'embed';
            if (y && y.nodeName == 'OBJECT') {
                if (typeof y.SetVariable != 'undefined') {
                   x= y;
                } else {
                    var z = y.getElementsByTagName(r)[0];
                    if (z) {
                        x= z;
                    }
                }
            }
            return x;
        },
        ajax: function(b, u, s, f) {
            var x = this.getXhr();
            var a = [],
            m = '';
            if (b == 'get') {
                if (s.indexOf('?') > -1) {
                    m = s + '&t=' + new Date().getTime();
                } else {
                    m = s + '?t=' + new Date().getTime();
                }
                x.open('get', m);
            } else {
                a = s.split('?');
                s = a[0],
                m = a[1];
                x.open('post', s, true);
            }
            x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            x.setRequestHeader('charset', u);
            if (b == 'post') {
                x.send(m);
            } else {
                x.send(null);
            }
            x.onreadystatechange = function() {
                if (x.readyState == 4) {
                    var g = x.responseText;
                    if (g != '') {
                        f(g);
                    } else {
                        f(null);
                    }
                }
            }
        },
        addListener: function(e, f) {
			var o=CKobject._V_;
            if (o.addEventListener) {
				try{
                	o.addEventListener(e, f, false);
				}
				catch (e) {
					 this.getNot();
				}
            }
			else if (o.attachEvent) {
				try{
                	o.attachEvent('on' + e, f);
				}
				catch(e){
					 this.getNot();
				}
            }
			else {
                o['on' + e] = f;
            }
        },
        removeListener: function( e, f) {
			var o=CKobject._V_;
            if (o.removeEventListener) {
				try{
                	o.removeEventListener(e, f, false);
				}
				catch(e){
					 this.getNot();
				}
			}
			else if (o.detachEvent) {
				try{
                	o.detachEvent('on' + e, f);
				}
				catch(e){
					 this.getNot();
				}
			}
			else {
                o['on' + e] = null;
            }
        },
        Flash: function() {
            var f = false,v = 0;
            if (document.all  || this.browser()['B'].toLowerCase().indexOf('ie')>-1) {
                try {
                    var s = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                    f = true;
                    var z = s.GetVariable('$version');
                    v = parseInt(z.split(' ')[1].split(',')[0]);
                } catch(e) {}
            } else {
                if (navigator.plugins && navigator.plugins.length > 0) {
                    var s = navigator.plugins['Shockwave Flash'];
                    if (s) {
                        f = true;
                        var w = s.description.split(' ');
                        for (var i = 0; i < w.length; ++i) {
                            if (isNaN(parseInt(w[i]))) continue;
                            v = parseInt(w[i]);
                        }
                    }
                }
            }
            return {
                f: f,
                v: v
            };
        },
		embed:function(f,d,i,w,h,b,v,e,p,j){
			var s=['all'];
			if(b){
				if(this.isHTML5()){
					this.embedHTML5(d,i,w,h,e,v,s,j);
				}
				else{
					this.embedSWF(f,d,i,w,h,v,p);
				}
			}
			else{
				if(this.Flash()['f'] && parseInt(this.Flash()['v'])>10){
					this.embedSWF(f,d,i,w,h,v,p);
				}
				else if(this.isHTML5()){
					this.embedHTML5(d,i,w,h,e,v,s,j);
				}
				else{
					this.embedSWF(f,d,i,w,h,v,p);
				}
			}
		},
		embedSWF: function(C, D, N, W, H, V, P) {
            if (!N) {
                N = 'ckplayer_a1'
            }
            if (!P) {
                P = {
                    bgcolor: '#FFF',
                    allowFullScreen: true,
                    allowScriptAccess: 'always',
					wmode:'transparent'
                };
            }
			this._A_=V;
			this.getX();
            var u = 'undefined',
			g = false,
            j = document,
            r = 'http://www.macromedia.com/go/getflashplayer',
            t = '<a href="' + r + '" target="_blank">�����˴����ذ�װ���µ�flash���</a>',
            error = {
                w: '������ҳ������w3c��׼���޷���ʾ������',
                f: '��û�а�װflash������޷�������Ƶ��' + t,
                v: '����flash����汾���ͣ��޷�������Ƶ��' + t
            },
            w3c = typeof j.getElementById != u && typeof j.getElementsByTagName != u && typeof j.createElement != u,
            i = 'id="' + N + '" name="' + N + '" ',
            s = '',
            l = '';
            P['movie'] = C;
            P['flashvars'] = this.getflashvars(V);
			if(W==-1){
				d=true;
				this._K_(D).style.width='100%';
				W='100%';
			}
            s += '<object pluginspage="http://www.macromedia.com/go/getflashplayer" ';
            s += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
            s += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" ';
            s += 'width="' + W + '" ';
            s += 'height="' + H + '" ';
            s += i;
            s += 'align="middle">';
            s += this.getparam(P)['v'];
            s += '<embed ';
            s += this.getparam(P)['w'];
            s += ' width="' + W + '" height="' + H + '" name="' + N + '" id="' + N + '" align="middle" ' + i;
            s += 'type="application/x-shockwave-flash" pluginspage="' + r + '" />';
            s += '</object>';
            if (!w3c) {
                l = error['w'];
				g = true;
            } else {
                if (!this.Flash()['f']) {
                    l = error['f'];
					g = true;
                } else {
                    if (this.Flash()['v'] < 11) {
                        l = error['v'];
						g = true;
                    } else {
                        l = s;
						this._T_=false;
                    }
                }
            }
            if (l) {
                this._K_(D).innerHTML = l;
            }
			if (g){
				this._K_(D).style.color = '#0066cc';
				this._K_(D).style.lineHeight = this._K_(D).style.height;
				this._K_(D).style.textAlign= 'center';
			}
        },
        embedHTML5: function(C, P, W, H, V, A, S, J) {
            this._E_ = {
                c: C,
                p: P,
                w: W,
                h: H,
                v: V,
                s: S,
				j: J==undefined || J?true:false
            };
            this._A_ = A;
			this.getX();
            b = this.browser()['B'],
            v = this.browser()['V'],
            x = v.split('.'),
            t = x[0],
            m = b + v,
            n = b + t,
            w = '',
            s = false,
            f = this.Flash()['f'],
            a = false;
            if (!S) {
                S = ['iPad', 'iPhone', 'ios'];
            }
            for (var i = 0; i < S.length; i++) {
                w = S[i];
                if (w.toLowerCase() == 'all') {
                    s = true;
                    break;
                }
                if (w.toLowerCase() == 'all+false' && !f) {
                    s = true;
                    break;
                }
                if (w.indexOf('+') > -1) {
                    w = w.split('+')[0];
                    a = true;
                } else {
                    a = false;
                }
                if (this.Platform() == w || m == w || n == w || b == w) {
                    if (a) {
                        if (!f) {
                            s = true;
                            break;
                        }
                    }else {
                        s = true;
                        break;
                    }
                }
            }
            if (s) {
                if (V) {
                    var l = V[0].split('->');
                    if (l && l.length == 2 && l[1].indexOf('ajax') > -1) {
                        this.getUrl(l, true);
                        return;
                    }
                }
                this.showHtml5();
            }
        },
        status: function() {
            this._H_ = parseInt(this.getSn('setup', 20));
			var f='ckplayer_status';
			if (this.getSn('calljs', 0)!='') {
				f=this.getSn('calljs', 0);
			}
			try {
				if (typeof(eval(f)) == 'function') {
					this._L_=eval(f);
					this._M_=true;
					return true;
				}
			} catch(e) {
				try {
					if (typeof(eval(ckplayer_status)) == 'function') {
						this._L_=ckplayer_status;
						this._M_=true;
						return true;
					}
				} catch(e) {
					return false;
				}
			}
			return false;
        },
        showHtml5: function() {
            var C = CKobject;
            var p = C._E_['p'],
			a = C._E_['v'],
			c = C._E_['c'],
			j = '',
			b = false;
			var s = this._E_['v'];
			var w=C._E_['w'],h=C._E_['h'];
			var d=false;
			var r='';
			if(s.length==1){
				r=' src="'+s[0].split('->')[0]+'"';
			}
			if(w==-1){
				d=true;
				C._K_(c).style.width='100%';
				w='100%';
			}
			if(w.toString().indexOf('%')>-1){
				w='100%';
			}
			if(h.toString().indexOf('%')>-1){
				h='100%';
			}
			if(C._E_['j']){
				j='controls="controls"';
			}
			var v = '<video '+j+r+' id="' + p + '" width="' + w + '" height="' + h + '"' + C.getParams() + '>' + C.getVideo() + '</video>';
            C._K_(c).innerHTML = v;
            C._K_(c).style.backgroundColor = '#000';
            C._V_ = C._K_(p);
			if(!d){
				C._K_(c).style.width=C._E_['w'].toString().indexOf('%')>-1?(C._K_(c).offsetWidth*parseInt(C._E_['w'])*0.01)+'px':C._V_.width+'px';
				C._K_(c).style.height=C._E_['h'].toString().indexOf('%')>-1?(C._K_(c).offsetHeight*parseInt(C._E_['h'])*0.01)+'px':C._V_.height+'px';
			}
            C._P_ = false;
            C._T_ = true;
			if (C.getVars('loaded')!='') {
				var f=C.getVars('loaded')+'()';
				try {
                	if (typeof(eval(f)) == 'function') {
						eval(f);
					}
				} catch(e) {
					try {
						if (typeof(eval(loadedHandler)) == 'function') {
							loadedHandler();
						}
					} catch(e) {
					}
				}
            }
            C.status();
			C.addListener('play', C.playHandler);
			C.addListener('pause', C.playHandler);
			C.addListener('error', C.errorHandler);
			C.addListener('emptied', C.errorHandler);
			C.addListener('loadedmetadata', C.loadedMetadataHandler);
			C.addListener('ended', C.endedHandler);
			C.addListener('volumechange', C.volumeChangeHandler);
			if((C.getVars('m')!='' && C.getVars('m')!=null) || parseInt( C.getSn('setup', 0))>0){
				C._K_(c).style.cursor='pointer';
			}
			if((C.getVars('m')!='' && C.getVars('m')!=null) || parseInt( C.getSn('setup', 1))==1){
				C.addListener('click', C.html5Click);
			}
        },
        videoPlay: function() {
            if (this._T_) {
                this._V_.play();
            }
        },
        videoPause: function() {
            if (this._T_) {
                this._V_.pause();
            }
        },
        playOrPause: function() {
            if (this._T_) {
                if (this._V_.paused) {
                    this._V_.play();
                } else {
                    this._V_.pause();
                }
            }
        },
        fastNext: function() {
            if (this._T_) {
                this._V_['currentTime'] = this._V_['currentTime'] + 10;
            }
        },
        fastBack: function() {
            if (this._T_) {
                this._V_['currentTime'] = this._V_['currentTime'] - 10;
            }
        },
        changeVolume: function(n) {
            if (this._T_) {
                this._V_['volume'] = n * 0.01;
            }
        },
        videoSeek: function(t) {
            if (this._T_) {
                this._V_['currentTime'] = t;
            }
        },
        newAddress: function(u) {
            var s = [];
            if (u) {
                s = this.isHtml5New(u);
            } else {
                return;
            }
            if (s && this._T_) {
                this.changeParams(u);
                var l = s[0].split('->');
                if (l && l.length == 2 && l[1].indexOf('ajax') > -1) {
                    this.getUrl(l, false);
                    return;
                }
                this._E_['v'] = s;
                this.newAdr();
            }
        },
		quitFullScreen:function() {
			if(document.cancelFullScreen) {
				document.cancelFullScreen();
			} 
			else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if(document.webkitCancelFullScreen) {
	   			document.webkitCancelFullScreen();
			}

		},
		changeStatus:function(n){
			this._H_=n;
		},
        newAdr: function() {
			var s = this._E_['v'];
            this._V_.pause();
			if(s.length==1){
            	this._V_.src=s[0].split('->')[0];
			}
			else{
				this._V_['innerHTML'] = this.getVideo();
			}
            this._V_.load();
        },
        isHtml5New: function(s) {
            if (s.indexOf('html5') == -1) {
                return false;
            }
            var a = s.replace(/{/g, '');
            var b = a.split('}');
            var c = '';
            for (var i = 0; i < b.length; i++) {
                if (b[i].indexOf('html5') > -1) {
                    c = b[i].replace('html5->', '').split(',');
                    break;
                }
            }
            return c;
        },
        changeParams: function(f) {
            if (f) {
                var a = f.replace(/{/g, '');
                var b = a.split('}');
                var c = '';
                for (var i = 0; i < b.length; i++) {
                    var d = b[i].split('->');
					if(d.length == 2){
						switch(d[0]){
							case 'p':
								if(parseInt(d[1]) == 1){
									this._V_.autoplay = true;
								}
								else if(parseInt(d[1]) == 2){
									this._V_.preload = 'metadata';
								}
								else{
									this._V_.autoplay = false;
									if(this._I_!=null){
										clearInterval(this._I_);
										this._I_=null;
									}
								}
								break;
							case 'e':
								if(parseInt(d[1]) == 1){
									this._V_.loop = true;
								}
								else{
									this._V_.loop = false;
								}
								break;
							case 'i':
								this._V_.poster = d[1];
								break;
							default:
								break;
						}
					}
                }
            }
        },
        frontAdPause: function(s) {
            this.getNot();
        },
        frontAdUnload: function() {
            this.getNot();
        },
        changeFace: function(s) {
            this.getNot();
        },
        plugin: function(a, b, c, d, e, f, g) {
            this.getNot();
        },
        videoClear: function() {
            this.getNot();
        },
        videoBrightness: function(s) {
            this.getNot();
        },
        videoContrast: function(s) {
            this.getNot();
        },
        videoSaturation: function(s) {
            this.getNot();
        },
        videoSetHue: function(s) {
            this.getNot();
        },
        videoWAndH: function(a, b) {
            this.getNot();
        },
        videoWHXY: function(a, b, c, d) {
            this.getNot();
        },
		changeFlashvars: function(a) {
            this.getNot();
        },
		changeMyObject: function(a, b) {
            this.getNot();
        },
		getMyObject: function(a, b) {
            this.getNot();
        },
		changeeFace: function() {
            this.getNot();
        },
		changeStyle: function(a, b) {
            this.getNot();
        },
		promptLoad: function() {
            this.getNot();
        },
		promptUnload: function() {
            this.getNot();
        },
		marqueeLoad: function(a,b) {
            this.getNot();
        },
		marqueeClose: function(s) {
            this.getNot();
        },
        getNot: function() {
            var s='The ckplayer\'s API for HTML5 does not exist';
			return s;
        },
        volumeChangeHandler: function() {
            var C = CKobject;
            if (C._V_.muted) {
                C.returnStatus('volumechange:0', 1);
                C._O_['volume'] = 0;
                C._O_['mute'] = true;
            } else {
                C._O_['mute'] = false;
                C._O_['volume'] = C._V_['volume'] * 100;
                C.returnStatus('volumechange:'+C._V_['volume'] * 100, 1);
            }
        },
        endedHandler: function() {
            var C = CKobject;
			var e=parseInt(C.getVars('e'));
            C.returnStatus('ended', 1);
			if(C._I_){
				clearInterval(C._I_);
				C._I_=null;
			}
            if ( e!= 0 && e !=4 && e !=6) {
                return;
            }
			if(e==6){
				this.quitFullScreen();
			}
			var f='playerstop()';
			if (C.getSn('calljs', 2)!='') {
				f=C.getSn('calljs', 2)+'()';
			}
			try {
				if (typeof(eval(f)) == 'function') {
					eval(f);
					return;
				}
			} catch(e) {
				try {
					if (typeof(eval(playerstop)) == 'function') {
						playerstop();
						return;
					}
				} catch(e) {
					return;
				}
			}
        },
        loadedMetadataHandler: function() {
            var C = CKobject;
            C.returnStatus('loadedmetadata', 1);
            C._O_['totaltime'] = C._V_['duration'];
            C._O_['width'] = C._V_['width'];
            C._O_['height'] = C._V_['height'];
            C._O_['awidth'] = C._V_['videoWidth'];
            C._O_['aheight'] = C._V_['videoHeight'];
            if (C._V_.defaultMuted) {
                C.returnStatus('volumechange:0', 1);
                C._O_['mute'] = true;
                C._O_['volume'] = 0;
            } else {
                C._O_['mute'] = false;
                C._O_['volume'] = C._V_['volume'] * 100;
                C.returnStatus('volumechange:'+C._V_['volume'] * 100, 1);
            }
			if (parseInt(C.getVars('p')) == 1) {
				C.playHandler();
			}
        },
        errorHandler: function() {
            CKobject.returnStatus('error', 1);
        },
        playHandler: function() {
            var C = CKobject;
            if (C._V_.paused) {
                C.returnStatus('pause', 1);
                C.addO('play', false);
				if(C._I_!=null){
					clearInterval(C._I_);
					C._I_=null;
				}
            } else {
                C.returnStatus('play', 1);
                C.addO('play', true);
                if (!C._P_) {
                    C.returnStatus('play', 1);
                    C._P_ = true;
                }
                C._I_ = setInterval(C.playTime, parseInt( C.getSn('setup', 37)));
				if(!C._G_){
					C._G_=true;
					for(var k in C._A_){
						if(k=='g' && C._A_[k]){
							var g=parseInt(C._A_[k]);
							C.videoSeek(g);
						}	
					}
				}
				if(!C._Y_){
					C._Y_=true;
					for(var k in C._A_){
						if(k=='j' && C._A_[k]){
							var j=parseInt(C._A_[k]);
							if(j>0){
								C._J_=j;
							}
							else{
								C._J_=parseInt(C._O_['totaltime'])+j;
							}
						}	
					}
				}
            }
        },
		html5Click: function(){
			var C = CKobject;
			if(C.getVars('m')!='' && C.getVars('m')!=null){
				window.open(C.getVars('m'));
			}
		},
        returnStatus: function(s, j) {
            var h = s;
            if (this._H_ == 3) {
                h = this._E_['p'] +'->'+ h;
            }
            if (this._M_ && j <= this._H_ ) {
                this._L_(h);
            }
        },
        addO: function(s, z) {
            this._O_[s] = z;
        },
        getStatus: function() {
            return this._O_;
        },
        playTime: function() {
            var C = CKobject;
            var t = C._V_['currentTime'];
            C._O_['time'] = t;
			if(C._J_>0 && t>C._J_){
				C._J_=0;
				C.videoSeek(C._O_['totaltime']);
			}
            C.returnStatus('time:' + t, 1);
        }
    }
    window.CKobject = CKobject;
})();