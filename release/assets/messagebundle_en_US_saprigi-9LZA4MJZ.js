const E="⁪⁪⁪‌‌​‌​‌‍‌‍​​​‌‌‍‌‌‌​​‍​​​​‍‌‍‍‌‍‍​‌​‍‍‌​‍⁪Target⁪⁪",A="⁪⁪⁪‌​‍‌​​‍‍‍‍‌​​​​‍‍‍​‍‌​‍‍‍‍‌‌‍‌‌‌‍​‍‌‌‍​‍‌⁪Deviation⁪⁪",S="⁪⁪⁪‌​‍​​​‍‍‌​‍‌‌‌‍‍‌‌‌‌‍‌‌‌‍‍‌​‍​‌‌‍‍​‌‌‍‌‍‍⁪Abort⁪⁪",_="⁪⁪⁪‌‌‌‌‍​​‌‍‍​​‌‍​​‍​‌‌‍​‍‍​​‌​​​‍‌​‍​​​​‍​⁪Cancel⁪⁪",t="⁪⁪⁪‌‌​​​‌‌‌​‍‌‌‌‍‌‍​​‌​‍‌​‍‌​‍‍‍‌‌​‌​​​‍‌‍‌​⁪Close⁪⁪",R="⁪⁪⁪‌​‌‍‌​‍‌‍‍​​‍‍‍​‍‍​​‍​‌​‍‍‌‌​‌​​‍​​‍​‍‍‌‌⁪Delete⁪⁪",s="⁪⁪⁪‍​​‌‌‌​‌‍​‍​‍‌​‌‍‍‍‌​‍‌‍‌‍‌‍‍​‌‌‍​‍​‍‌​‍⁪Ignore⁪⁪",o="⁪⁪⁪‌​‍‌‌‌‌‌​​‌​‍‌‍​​‍‌‌‌‌‍‍‌‍‌‍​‍‌‍‍‌‌‍‍‌​‍‍⁪No⁪⁪",e="⁪⁪⁪‍‌​‍​​‍‍​‍‌‍​‍‍‌​‍‍‌‌‌​‍‍‍‍‍​‍​​‌​‍‌‌‌​‌⁪OK⁪⁪",T="⁪⁪⁪‌‌‍‌​‌‍‌​​​​‍​‍‌​‌‌‍‍‌‌‍‍‍​‍‍‍​‍‌‍​‌‌‌​​⁪Retry⁪⁪",I="⁪⁪⁪‍​‍​​‍​​‍​​‌​‍‌‍‌​‍​​‍‍​‍​‍‍‍‍‍‌‌​‍‍​‌​‌⁪Yes⁪⁪",n="⁪⁪⁪‍​​‍‌‌‍​‌‌‌‍​​​​‍‌‌‌​​​​​‍‍‍‍‍​​​‍‍‍​‌‍⁪Clear Sorting⁪⁪",O="⁪⁪⁪‌‌​​‍‌‌‍​‌​‍‍‍‍‍​‍‍‍​‍‌‍‍‌‌‍‍‍‌​​‌​‍​‌​‍‍⁪Sort Ascending⁪⁪",c="⁪⁪⁪‍‍​‌‌​‌‌‌‌​‌‍‍​‌‍‌‍‍‌​‍​​‍‌‌‍​‍‌‍​​​‌‍​​⁪Sort Descending⁪⁪",L="⁪⁪⁪‍‍‌​‌‌​‍‌‍‌‍‍‍‌‌‍‌‍​‌​​​‌​‌​​‌​‍‌‍‍​‌‍‌‌⁪Group⁪⁪",C="⁪⁪⁪‌‌​​‍​​‌‍‌‌‍‍‍‌‌‌‌‍‌‍‌‍‌​‍​‍​‌​‍​‌‍‌​‌‍‍‌⁪Grouped⁪⁪",N="⁪⁪⁪‌​​‌‍‌‍‍‌‌‌​‍‌​​‍‍​​‌​‍​‍​​‌‍​‌​​​‍‌​​‌‍‌⁪Ungroup⁪⁪",D="⁪⁪⁪‌‌​‌‌‌​​​‍‍‍‌​‌‌‌​‍​​‍‍‍​‍​‍‌‌‌‌‍‌‍​​​​​​⁪Drag to resize⁪⁪",a="⁪⁪⁪‌​​‌‌‌‍‍​‌​‍‌‌‌‍‌​​‍​​‌‌‌‌‍‌‌​‍‍​​​​‌‍‌‍​⁪Please wait⁪⁪",P="⁪⁪⁪‍​‌​​‍‍‍‍​‌​​​‍‌‌‍‍​‍‍​​‍‌‌‌‍‍‌‍​​​‌‌​‍‌⁪Confirmation⁪⁪",V="⁪⁪⁪‌​​​‌‍​​​​​​‌‌‌‍‌‌‌‍​‍‍‍‍​​‍‌‍‌​‌‍‍​​​​‍⁪Error⁪⁪",r="⁪⁪⁪‌‌‍‍‌‌‍‌​‌‌‌‌‌‍‌‌‍‌‍‍‍‌​​​‍‍​‍‌‍​‍​‍​‍‍‌⁪Information⁪⁪",i="⁪⁪⁪‍‌​‍​​​​​‌‌​‍​​​‌‌‍‌​‍‍​​‌‌‌‍‌‌​‍‍​‍‌‍​​⁪Success⁪⁪",l="⁪⁪⁪‌​‍‌​​‌​‌‍‌‍​​‌​‌‌‍‌​‌​‌​‌‌‌​​​‌​‌‍‍‍​‍​​⁪Warning⁪⁪",U="⁪⁪⁪‌‍​‍‍‍‍‍​‍‍‍‍‌‌​​‌​​‌‍​‌‌‍​​​‍‍‌‍‌‍‍​​​‌⁪Show Less⁪⁪",F="⁪⁪⁪‍‌‌‍​‍‌​​‍​​​‍‌‌‌​​‍‌‌​‌‍‌‌‍​‌‌‍​​​‌​‍‍‌⁪Show More⁪⁪",M="⁪⁪⁪‌​‌‍‍​‍​‌‍‍‍​​‍‍​‌‍​‍‌‍​‌‌‌​‌​‍‌‍‌​⁪Expand Group⁪⁪",G="⁪⁪⁪‌​‌​‌‍‌​​‌‌‌‍​‍​​​‍‍‍‌​‍‍‌‍​‍‌‌‌‍​‌‍​‌‌​⁪Collapse Group⁪⁪",H="⁪⁪⁪‌​‍‌​‌‌​‍​‍‍​​‌‍‍‍​‍‍​‌​‌​‍‍‌​‌‌​‍​‌‍‍‍​‍⁪Show Filter Bar⁪⁪",W="⁪⁪⁪‍‍​‍​​‌‍‌​‍‍​‍‌​​‌​‍‌‍​​‍‍‍‍​‍‌​‍‍‌‍‍‌⁪Hide Filter Bar⁪⁪",d="⁪⁪⁪‍‍​‍‌​‍​‌​​‌​‍‌‌‌‍​​​‍‍​​​‌‍‌‌​‌‍​‌​​​‍​⁪Clear⁪⁪",B="⁪⁪⁪‌‌‌​​‌‍​‍​‌‍​‌‌‍​​​‍‌‌​​‍‍‌‌‍‌‌‌‍‍‌‍‌‍‍‍‌⁪Restore⁪⁪",p="⁪⁪⁪‌​​‍​‌‌‌​​​‍​​‌​‍‌‌​‌​​‌‍‌​‍​​‍‍‍‌​‍‍‌‍⁪Filters⁪⁪",Y="⁪⁪⁪‌‌​‍‌​​​‌‍‌​​​​‍‍​‍​‍‍​​​​‍‌‍‍‌​​‌​​‌‌‍‍⁪Adapt Filters⁪⁪",w="⁪⁪⁪‌‌​‍​‌‍​‍‌‌‍‌‌​‍‍‌‍‌​​​‍‍​‍​‍‌‍‍‍‌‌​‍‌​‍​⁪Go⁪⁪",h="⁪⁪⁪‍‌​‍‌‍‌‍‍‍‌‌​‍‌‍​‌​‍‍‌‍‌‍​‍‌​‍‌​‍‍‍‍​‌‍​⁪Save⁪⁪",u="⁪⁪⁪‍​​‍‍‌​‍​​‌‌​​‌‍​‍‌‍‌‌​‌​‍‍‌‌‍‌​‍‍​​‌‌‍​⁪Show on Filter Bar⁪⁪",g="⁪⁪⁪‌‍​​‌​‌‍‍‍​​‌​​​‌‍‍‍​‌​‌‌​‌​‍​‍‌​‍​‌‍‌‌⁪Basic⁪⁪",v="⁪⁪⁪‌​​​​​‍‍‍‍‍‌​​​​‍‍‍‌​‍‍​‍‍​​‍‍‍​‌‌‌​​​‌‍‌⁪Search for Filters⁪⁪",b="⁪⁪⁪‌‌‌‌‌​‍​​‌​‌‌‍‌‍​​​‌​‍‍‌​‍‍‌‌‌​‌​‌‌‌​‍‌‍‍⁪Show Fields by Attribute⁪⁪",X="⁪⁪⁪‍​‍​‌​​‌​‍‍​‌​‌‍​​​‌​‌‌‍‍‌​​‌‍​‌‍‌‍​​​​‌⁪Visible⁪⁪",f="⁪⁪⁪‌‌‌​‍‍‍​‌‍‌​​‍‌​‌‍‍​‍​‍‌‌‍​‍‌‌‍‍‌​‍​​​‌​⁪Active⁪⁪",y="⁪⁪⁪‌​‍‍​‍​‍‌​‍‌​​​​‍‍‍​‌‍‍‌‌‍‌‍‌‍‍‌​​‌‌‌​​‌⁪Visible and Active⁪⁪",m="⁪⁪⁪‌​​‍‍‌‍‍‍‌‌​‌​‍​‍‍‌​‍​‍‌‍​‌​​‍​​‍‌​‌‌‌‌‍⁪Mandatory⁪⁪",K="⁪⁪⁪‌​‌‍​​‌‍‌​‌‍‍‌​‌​​​‍‌​‌‌‍‌​‌​‌‍​‍‌‌‌‍‌‍‌‌⁪List View⁪⁪",x="⁪⁪⁪‌‌‌​‍​‌‍‌​‍​​‍‌​​​‍‍‌​‌​​​‌​‍​‌​​‌‌​‍​‍​‌⁪Group View⁪⁪",J="⁪⁪⁪‍‌​‌‍​​‌​‌‌‌‍‍‌​‍​‍‌‍​​‌‌​​‌‌​‍‍‌​‌‌‍‌​‌⁪Show Values⁪⁪",j="⁪⁪⁪‌​‌‌​‍‌‌​‍‍‌‍​‌‌‍​​‌‍​‍‍‌​‌​‌​​‍‍​​​​‌‍⁪Hide Values⁪⁪",k="⁪⁪⁪‍‌‌‍‍‌‍‍​‍​‍‍​​‍‍​‍‍​​​​‌‌‌‍‌​‌​‍‍‌‌‌​‌‍⁪Field⁪⁪",Z="⁪⁪⁪‍​‌​‍‍‌‌‍‌​‍​‍‌​‍‌​​‌‌​‍‌‌‌​​​​‍‌‌​​‌‍‍⁪Collapse Header⁪⁪",z="⁪⁪⁪‍‍​‌‌‌​‍‌‍‌​​‍‌‍‌​​​​​​​‍‍‌‍‌‍‌​​​​‌‌‍​⁪Expand Header⁪⁪",q="⁪⁪⁪‌‌​​​‌​​‍​‌​​‍‌‌‌​‍‍‍‌​​‌‌‍‍‍‍‍​‌‌​​​‍‌‌‌⁪Pin Header⁪⁪",Q="⁪⁪⁪‍​‍​​‍‌‌‌‌​​‍‍​‍​‍‌‍​​​‍​‍​​‍‌‌‌‌‌‌​​‌‍‌⁪Unpin Header⁪⁪",$="⁪⁪⁪‌​‌‌​‌​‍​‌‌​‍‍‌​‍‌‌​‍​‌​‍​‍​​‌‌‍​‍​‌‌‍‍​‍⁪Separator⁪⁪",EE="⁪⁪⁪‍‍​​​‌​‍​‌​​‌‍‍‌​‍‍‌​​‍‍‍‍‍​​​​​‍‌‍‍‍‌‌⁪Available Actions⁪⁪",AE="⁪⁪⁪‍‌‍‌‌‌‍​‍​​‍​‌‍‍​​‌​‍​​​‍​​​‌​​‌‌​‍​‍​‌‍⁪Item ​​​{0}‌‌‌ of ​​​{1}‌‌‌⁪⁪",SE="⁪⁪⁪‌‌​‍‌​‍‍​‌​‍​​​​‌‌​‌‍​‍​​‌​‌‍‌‌​​‌‍‌‍​‌​‍⁪My Views⁪⁪",_E="⁪⁪⁪‍‌‍​​‌‌​‌‌‍​‍‍​‍‌​‍‍‍‌‍‍‌‌​‍‍​‌‌‌‍‍‍​​​⁪Save View⁪⁪",tE="⁪⁪⁪‍‌‍​‍‍‍‌‍​‌‍​‌‍‌‍‍‍‌‍​‍​‌‍‍‌‌‌‌‌‌‍‍​‍‌‌‍⁪Manage Views⁪⁪",RE="⁪⁪⁪‌‌​‌‌‌‍​‌​​​​‌​‍‌‌​‌​‌‌​​‌‍‍‌‌‍​‌‍‌​‌‌‍​​⁪View⁪⁪",sE="⁪⁪⁪‌‍‌‍‍‌​​​‌‌​‌‌‌‍​​​​‍‍‍​​‌​‍​‍‍​‍​‍​​​⁪The view name already exists. Please enter a different name.⁪⁪",oE="⁪⁪⁪‍​​​​‍​​‌‌‍‍​​‍​‌‌‌‍‌​​‌‌​‍‍‌‍‍‌‌‍‌​‍‍​‌⁪Please specify a view name.⁪⁪",eE="⁪⁪⁪‍​​​‍​‍​​​​‍‌‍‍​‌‍​​‍​‌‍​‌‍​‌​​‍‍‌‌‍‌‌‍​⁪Set as Default⁪⁪",TE="⁪⁪⁪‍‍‍‍‍​‌​‍‍‌‍‍‌‍‌‌‌​​‌​‌​‌‍‍‌‌​‌‍‍​‍‌‌‌‌‍⁪Public⁪⁪",IE="⁪⁪⁪‍‌‌‌‌‍‍‍‍‍‌​‌‍​​‌‍​​‌‌​‍‍‍‌​​‌​‍​‌​‌​‌​‍⁪Apply Automatically⁪⁪",nE="⁪⁪⁪‍​‌​‍‌​​‍​‌​‍‍​‌‍​‍‍‌‌‍‌‌‍‌​​​‌‌‍‍‌‌‍‍‍‍⁪Sharing⁪⁪",OE="⁪⁪⁪‍​‍​​‍​‍‍​‌​​‌‍‍​‌‌‍‌​‌‍‌‌​‌‌‌‍‍‌​​​​‌​​⁪Default⁪⁪",cE="⁪⁪⁪‌‌‌‌‍​​‍‌​‍‍‍‌​​​​​​​​‌​‌​‍‌‍‌‍‍‍‌‍‍‌‍​​⁪Created By⁪⁪",LE="⁪⁪⁪‌‌‌‌​‍‌‌‍​​‍‍‌‍‍​‍‍​‍‍‌‍​​‌​​​​‌​‍‍​‍‍​​⁪Manage⁪⁪",CE="⁪⁪⁪‍​​‌​​‌‍​‍​​​‍‍‌​‌​‍​‍‌‍​‌‌​‌​‍‍‍​‍‌‍​⁪Private⁪⁪",NE="⁪⁪⁪‌​‍​‌​​​‌‌​‍‍‌‌‍​‌‌‌‌‌​‌‍​‌​‌‍‍‍​​‌​‍‌​​​⁪Use as Standard View⁪⁪",DE="⁪⁪⁪‍‍‌‌​‌‍‌‍‍‌‍‌​‌‌‌​​​‌‌‍‍​​​​​​‍​‌‌‍‍​​​‍⁪Mark as Favorite View⁪⁪",aE="⁪⁪⁪‍‍‌‌‍‍​‍​‍‌‍​​‍‍‍‌‍​​​​​‌‍‍‍​‌‍‍​‍‍‍‌‍​​⁪Delete View⁪⁪",PE="⁪⁪⁪‍‍‌‌‌‍​​‌‌​‍‌​‍​‍‌‌‍​‍‌‌‌‌‌‌​‌​‌​‌‌​​‍‌​⁪Select View⁪⁪",VE="⁪⁪⁪‍​‌‌‌‍​‍​‍‌‌‍‌‍‍​‍‌​​‌‍‌‌​​‌​​‌​‍‌‌‍‍​​​⁪Search Variant⁪⁪",rE="⁪⁪⁪‌​‍​‍‍‍‌‌‌‌‌‍‌‌‍‍​​​​‌‌​‌​​​‌​​​‍‌‌‍‌​‍‍‍⁪All⁪⁪",iE="⁪⁪⁪‌‌‍​‍‍‍​​​​​‍‌‌‍‌‍​​‌​‍‍‌‍‍​‍‍‌​‌‍‍​‍‍⁪Search⁪⁪",lE="⁪⁪⁪‍‌‍‍‌‌‌‍‌​​​​​​‌​​‌​‌​‌‍‌​‍​‍​‌​​​​‍‌​‍‌⁪Save As⁪⁪",UE="⁪⁪⁪‌​‌‌‍​‍‌‌‌‌‍‍​‌‍​​‍‌‌‍‍​‌​‍‌‌​​​​‌‍‍‍​‍​​⁪Reset⁪⁪",FE="⁪⁪⁪‌​‍‍​​‍‌‌‍‌‍‌​‌​‌‌‌​‍‍​‌​‍‍‌​‍‍‌​​‌​‌‍​‌‌⁪Selected as Favorite⁪⁪",ME="⁪⁪⁪‌​‌​‌​‍​‍‌​‌‍‌‍‍​‌​​‌‍‍‌​‌‌‍​‌‌​‍‍​‌‌​‍‍‌⁪Unselected as Favorite⁪⁪",GE="⁪⁪⁪‌‌‍‍‌​‌​‌‌‍‍‌‌‌​​​‌‌​​‌​‍‌‍‌‌‍​‌‍‍‍​‌‍​⁪Select⁪⁪",HE="⁪⁪⁪‌​‌‌‌‌‍‍​‌​​‍​‌‌‌‌‍‌‍‌​‍‌‍‍‌​​‌‍‍‌‌​‌​‌‍⁪Selected⁪⁪",WE="⁪⁪⁪‍‌‌‌​‌‍‌‌‍​​​‍‍‌​​‍‍​​‌‍‌​‍‌‍​‍​​‌‌‌‌‍‌​⁪Press ARROW keys to move⁪⁪",dE="⁪⁪⁪‍‌‍​‌​​‍‍‌​‌​‍​‌‍‌‌​​​‌‍‌‍‍‍‍‍​‌‌​‍‍​‍​​⁪No data⁪⁪",BE="⁪⁪⁪‌‌‍​​​‍‌‍‍​​‍​‌‍‍‍‍‍​​‌‌‌‌‌‌‌‌‍‌‍‍‌‍‌​‌‌⁪Expand Node⁪⁪",pE="⁪⁪⁪‍‌‌‍‌‌‍‍​‍​​​‍​​​​‍​‍‌​‌​‌‍‌​‍​‌​‌‌‍​​​​⁪Collapse Node⁪⁪",YE="⁪⁪⁪‍​‍‌‌‍​‍​​​‍​‍‌‌‍‍‌‌​‍‌‍‌‌‍‍‍‍‍‍‌​‌‍‌‍‍​⁪To expand the row, press the spacebar.⁪⁪",wE="⁪⁪⁪‍​‌​‍​‍‍‍‍‍‌‌‌​‍​‌‌‌‌‌‌​‍‌‌‌‍‍‍​‍‍​​‍​‌⁪To collapse the row, press the spacebar.⁪⁪",hE="⁪⁪⁪‍‌‌​‌​‍‌‌​​‍‍‌​‍‍‌‌​‍​‌‍‌​‌​​‌‍‍‍‍‌​‍‌‍‌⁪To select the row, press the spacebar.⁪⁪",uE="⁪⁪⁪‌‍‍​‌‌‌‌​​‍​‌​​​‌‍​‍‌‌‍‌​​‌​‌​​‍‌‍​​‍‍​⁪To deselect the row, press the spacebar.⁪⁪",gE="⁪⁪⁪‌​‌​‍‍‌‌‍‍​‍​​‍​​‌​‍‌‍‌​‍‌​​​‍​​​​‌‌​​​‍⁪Invalid Table⁪⁪",vE="⁪⁪⁪‌​​‍‌​‌​‌​‍‍‌​‍‍‍‍‍‌‌​‌‌‌‌​‌‍‌​‍‌‍‌​‍‌‍‍​⁪Filtered⁪⁪",bE="⁪⁪⁪‍‌‌​​‌‍‌​​​‌‍‍​‌​‌‍‍‍‍​‌‌‌‍‍‍‍‍‍‌‌​​​​‌⁪Card Header⁪⁪",XE="⁪⁪⁪‌‌​‍​‍‍‍​​​​‍​‍‍‍‍‌‍‍‍‍​​​‌‍​‍‌​‍‍​‌‌‌‍‍⁪Warning⁪⁪",fE="⁪⁪⁪‌​​‍‌‍​‍‍‌‍​‌‍‌‍‍​‍‌‍​​‍‍‌‌‍‌​‍‍​​‌‌‍​‍​⁪Good⁪⁪",yE="⁪⁪⁪‌​‌​‍​‌‌​‍‌‍‍​​‍‍‌​‌‌‍​‌​‌‌​‍‍​​‌​‍​‌​‌⁪Neutral⁪⁪",mE="⁪⁪⁪‌​‌‍​‍‌​‍‌​‍‍‍‍‌​‍​​​​​‍​‌‍‍‌​‌‍​‌‍​‍‍​‍⁪Critical⁪⁪",KE="⁪⁪⁪‌​​​​​‍‍​‌‌​‌​‍‌​‌‌‍‍‍‍‍‍‌​​‌‌‍‍‍​​​‍‌​​⁪Ascending⁪⁪",xE="⁪⁪⁪‌​​‍‌​‌‍‍​‌‍​‍​​‌‌‌‌​​‍‌​‌​​‌‍‍‍​‍‍​​​​⁪Descending⁪⁪",JE="⁪⁪⁪‌‌​‍‍​​​​‌​‍​‍‍‍‌‍‌‍​‌​‍‌‌‌​‍‍​‍‌‌‌​‍‌​⁪Object Status Button⁪⁪",jE="⁪⁪⁪‌‌​‍‍​‍‌‍​‌‌‌‌​‍‍‍‌​​‍​‍​‌‌‌‍‌​‍‍​‍​‌​‍⁪Object Status⁪⁪",kE="⁪⁪⁪‍​​​‌‍​‌‌‍‍‌‌‍‍‍​‍‌‌​​‍​‍‍‍​‍​‌​‌‌‌‌‍​‍⁪Indication Color⁪⁪",ZE="⁪⁪⁪‍​‍​‍‍‍​‌‍​‌‍‌‌‌​‍‌‌‌‍‍​‌‌​‌​‌‍​‌‍​​​‌‍​⁪Empty Value⁪⁪",zE="⁪⁪⁪‍​‍‌‍‌‍‌‍​‍‌‌‌‍​​‌‍‌​‍‌‍‍‍‌‌‍‌‌‌‍​‌‍‍‍‍⁪Select All⁪⁪",qE="⁪⁪⁪‌‍‍‌‌‍​​​​‌‌‍‍‍‍‍‌‍‌​‌​‍‌‌‌​‍‍​‍​​​​‍‌‍​⁪Deselect All⁪⁪",QE="⁪⁪⁪‌‌‌‌​​‌​​‍‍‍​‌‌‌​‍‍​​‌​​‌‌‍​​​‌‌​​​‍‌​​‍⁪Show the full text⁪⁪",$E="⁪⁪⁪‌‍‌‍‌‌‌​‍‌‍​‌​‌‌​​‌​‌‍​​‍​‍‍‍​‌‌​‌‌‌⁪Close the popover⁪⁪",EA={TARGET:E,DEVIATION:A,ABORT:S,CANCEL:_,CLOSE:t,DELETE:R,IGNORE:s,NO:o,OK:e,RETRY:T,YES:I,CLEAR_SORTING:n,SORT_ASCENDING:O,SORT_DESCENDING:c,GROUP:L,GROUPED:C,UNGROUP:N,DRAG_TO_RESIZE:D,PLEASE_WAIT:a,CONFIRMATION:P,ERROR:V,INFORMATION:r,SUCCESS:i,WARNING:l,SHOW_LESS:U,SHOW_MORE:F,EXPAND_GROUP:M,COLLAPSE_GROUP:G,SHOW_FILTER_BAR:H,HIDE_FILTER_BAR:W,CLEAR:d,RESTORE:B,FILTERS:p,ADAPT_FILTERS:Y,GO:w,SAVE:h,SHOW_ON_FILTER_BAR:u,BASIC:g,SEARCH_FOR_FILTERS:v,FIELDS_BY_ATTRIBUTE:b,VISIBLE:X,ACTIVE:f,VISIBLE_AND_ACTIVE:y,MANDATORY:m,LIST_VIEW:K,GROUP_VIEW:x,SHOW_VALUES:J,HIDE_VALUES:j,FIELD:k,COLLAPSE_HEADER:Z,EXPAND_HEADER:z,PIN_HEADER:q,UNPIN_HEADER:Q,SEPARATOR:$,AVAILABLE_ACTIONS:EE,X_OF_Y:AE,MY_VIEWS:SE,SAVE_VIEW:_E,MANAGE_VIEWS:tE,VIEW:RE,VARIANT_MANAGEMENT_ERROR_DUPLICATE:sE,SPECIFY_VIEW_NAME:oE,SET_AS_DEFAULT:eE,PUBLIC:TE,APPLY_AUTOMATICALLY:IE,SHARING:nE,DEFAULT:OE,CREATED_BY:cE,MANAGE:LE,PRIVATE:CE,MARK_AS_STANDARD:NE,MARK_AS_FAVORITE:DE,DELETE_VIEW:aE,SELECT_VIEW:PE,SEARCH_VARIANT:VE,ALL:rE,SEARCH:iE,SAVE_AS:lE,RESET:UE,SELECTED_AS_FAVORITE:FE,UNSELECTED_AS_FAVORITE:ME,SELECT:GE,SELECTED:HE,PRESS_ARROW_KEYS_TO_MOVE:WE,LIST_NO_DATA:dE,EXPAND_NODE:BE,COLLAPSE_NODE:pE,EXPAND_PRESS_SPACE:YE,COLLAPSE_PRESS_SPACE:wE,SELECT_PRESS_SPACE:hE,UNSELECT_PRESS_SPACE:uE,INVALID_TABLE:gE,FILTERED:vE,ARIA_DESC_CARD_HEADER:bE,SEMANTIC_COLOR_CRITICAL:XE,SEMANTIC_COLOR_GOOD:fE,SEMANTIC_COLOR_NEUTRAL:yE,SEMANTIC_COLOR_ERROR:mE,NUMERICCONTENT_DEVIATION_UP:KE,NUMERICCONTENT_DEVIATION_DOWN:xE,ARIA_OBJ_STATUS_DESC:JE,ARIA_OBJ_STATUS_DESC_INACTIVE:jE,INDICATION_COLOR:kE,EMPTY_VALUE:ZE,SELECT_ALL:zE,DESELECT_ALL:qE,SHOW_FULL_TEXT:QE,CLOSE_POPOVER:$E};export{S as ABORT,f as ACTIVE,Y as ADAPT_FILTERS,rE as ALL,IE as APPLY_AUTOMATICALLY,bE as ARIA_DESC_CARD_HEADER,JE as ARIA_OBJ_STATUS_DESC,jE as ARIA_OBJ_STATUS_DESC_INACTIVE,EE as AVAILABLE_ACTIONS,g as BASIC,_ as CANCEL,d as CLEAR,n as CLEAR_SORTING,t as CLOSE,$E as CLOSE_POPOVER,G as COLLAPSE_GROUP,Z as COLLAPSE_HEADER,pE as COLLAPSE_NODE,wE as COLLAPSE_PRESS_SPACE,P as CONFIRMATION,cE as CREATED_BY,OE as DEFAULT,R as DELETE,aE as DELETE_VIEW,qE as DESELECT_ALL,A as DEVIATION,D as DRAG_TO_RESIZE,ZE as EMPTY_VALUE,V as ERROR,M as EXPAND_GROUP,z as EXPAND_HEADER,BE as EXPAND_NODE,YE as EXPAND_PRESS_SPACE,k as FIELD,b as FIELDS_BY_ATTRIBUTE,vE as FILTERED,p as FILTERS,w as GO,L as GROUP,C as GROUPED,x as GROUP_VIEW,W as HIDE_FILTER_BAR,j as HIDE_VALUES,s as IGNORE,kE as INDICATION_COLOR,r as INFORMATION,gE as INVALID_TABLE,dE as LIST_NO_DATA,K as LIST_VIEW,LE as MANAGE,tE as MANAGE_VIEWS,m as MANDATORY,DE as MARK_AS_FAVORITE,NE as MARK_AS_STANDARD,SE as MY_VIEWS,o as NO,xE as NUMERICCONTENT_DEVIATION_DOWN,KE as NUMERICCONTENT_DEVIATION_UP,e as OK,q as PIN_HEADER,a as PLEASE_WAIT,WE as PRESS_ARROW_KEYS_TO_MOVE,CE as PRIVATE,TE as PUBLIC,UE as RESET,B as RESTORE,T as RETRY,h as SAVE,lE as SAVE_AS,_E as SAVE_VIEW,iE as SEARCH,v as SEARCH_FOR_FILTERS,VE as SEARCH_VARIANT,GE as SELECT,HE as SELECTED,FE as SELECTED_AS_FAVORITE,zE as SELECT_ALL,hE as SELECT_PRESS_SPACE,PE as SELECT_VIEW,XE as SEMANTIC_COLOR_CRITICAL,mE as SEMANTIC_COLOR_ERROR,fE as SEMANTIC_COLOR_GOOD,yE as SEMANTIC_COLOR_NEUTRAL,$ as SEPARATOR,eE as SET_AS_DEFAULT,nE as SHARING,H as SHOW_FILTER_BAR,QE as SHOW_FULL_TEXT,U as SHOW_LESS,F as SHOW_MORE,u as SHOW_ON_FILTER_BAR,J as SHOW_VALUES,O as SORT_ASCENDING,c as SORT_DESCENDING,oE as SPECIFY_VIEW_NAME,i as SUCCESS,E as TARGET,N as UNGROUP,Q as UNPIN_HEADER,ME as UNSELECTED_AS_FAVORITE,uE as UNSELECT_PRESS_SPACE,sE as VARIANT_MANAGEMENT_ERROR_DUPLICATE,RE as VIEW,X as VISIBLE,y as VISIBLE_AND_ACTIVE,l as WARNING,AE as X_OF_Y,I as YES,EA as default};
