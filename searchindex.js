Search.setIndex({envversion:49,filenames:["api","getting_started","index","installation","short_installation"],objects:{"":{atmcmc:[0,0,0,"-"],backend:[0,0,0,"-"],config:[0,0,0,"-"],covariance:[0,0,0,"-"],heart:[0,0,0,"-"],inputf:[0,0,0,"-"],metropolis:[0,0,0,"-"],models:[0,0,0,"-"],plotting:[0,0,0,"-"],pscmp:[0,0,0,"-"],psgrn:[0,0,0,"-"],theanof:[0,0,0,"-"],utility:[0,0,0,"-"]},"atmcmc.ATMCMC":{calc_beta:[0,2,1,""],calc_covariance:[0,2,1,""],get_chain_previous_lpoint:[0,2,1,""],mean_end_points:[0,2,1,""],resample:[0,2,1,""],select_end_points:[0,2,1,""]},"backend.Text":{get_values:[0,2,1,""],point:[0,2,1,""],record:[0,2,1,""],setup:[0,2,1,""]},"config.ATMCMCConfig":{check_bnd:[0,4,1,""],coef_variation:[0,4,1,""],n_chains:[0,4,1,""],n_jobs:[0,4,1,""],n_steps:[0,4,1,""],proposal_dist:[0,4,1,""],rm_flag:[0,4,1,""],stage:[0,4,1,""],tune_interval:[0,4,1,""],update_covariances:[0,4,1,""]},"config.BEATconfig":{date:[0,4,1,""],event:[0,4,1,""],geodetic_config:[0,4,1,""],hyper_sampler_config:[0,4,1,""],name:[0,4,1,""],problem_config:[0,4,1,""],project_dir:[0,4,1,""],sampler_config:[0,4,1,""],seismic_config:[0,4,1,""],update_hypers:[0,2,1,""]},"config.GFConfig":{custom_velocity_model:[0,4,1,""],earth_model:[0,4,1,""],n_variations:[0,4,1,""],nworkers:[0,4,1,""],replace_water:[0,4,1,""],source_depth_max:[0,4,1,""],source_depth_min:[0,4,1,""],source_depth_spacing:[0,4,1,""],store_superdir:[0,4,1,""],use_crust2:[0,4,1,""]},"config.GeodeticConfig":{calc_data_cov:[0,4,1,""],datadir:[0,4,1,""],gf_config:[0,4,1,""],tracks:[0,4,1,""],types:[0,4,1,""]},"config.GeodeticGFConfig":{code:[0,4,1,""],sampling_interval:[0,4,1,""],source_distance_max:[0,4,1,""],source_distance_min:[0,4,1,""],source_distance_spacing:[0,4,1,""]},"config.MetropolisConfig":{burn:[0,4,1,""],n_jobs:[0,4,1,""],n_stages:[0,4,1,""],n_steps:[0,4,1,""],proposal_dist:[0,4,1,""],rm_flag:[0,4,1,""],stage:[0,4,1,""],thin:[0,4,1,""],tune_interval:[0,4,1,""],update_covariances:[0,4,1,""]},"config.ProblemConfig":{datasets:[0,4,1,""],hyperparameters:[0,4,1,""],mode:[0,4,1,""],n_faults:[0,4,1,""],priors:[0,4,1,""],select_variables:[0,2,1,""],validate_hypers:[0,2,1,""],validate_priors:[0,2,1,""]},"config.SamplerConfig":{name:[0,4,1,""],parameters:[0,4,1,""]},"config.SeismicConfig":{arrival_taper:[0,4,1,""],blacklist:[0,4,1,""],calc_data_cov:[0,4,1,""],channels:[0,4,1,""],datadir:[0,4,1,""],distances:[0,4,1,""],filterer:[0,4,1,""],gf_config:[0,4,1,""],targets:[0,4,1,""]},"config.SeismicGFConfig":{code:[0,4,1,""],depth_limit_variation:[0,4,1,""],rm_gfs:[0,4,1,""],sample_rate:[0,4,1,""],source_distance_radius:[0,4,1,""],source_distance_spacing:[0,4,1,""]},"heart.ArrivalTaper":{a:[0,4,1,""],b:[0,4,1,""],c:[0,4,1,""],d:[0,4,1,""]},"heart.Covariance":{data:[0,4,1,""],inverse:[0,4,1,""],inverse_d:[0,4,1,""],inverse_p:[0,4,1,""],log_norm_factor:[0,4,1,""],pred_g:[0,4,1,""],pred_v:[0,4,1,""]},"heart.DiffIFG":{coherence:[0,4,1,""],covariance:[0,4,1,""],displacement:[0,4,1,""],odw:[0,4,1,""],reference_point:[0,4,1,""],reference_value:[0,4,1,""],unwrapped_phase:[0,4,1,""]},"heart.Filter":{lower_corner:[0,4,1,""],order:[0,4,1,""],upper_corner:[0,4,1,""]},"heart.GeodeticResult":{llk:[0,4,1,""],processed_obs:[0,4,1,""],processed_res:[0,4,1,""],processed_syn:[0,4,1,""]},"heart.GeodeticTarget":{typ:[0,4,1,""]},"heart.IFG":{amplitude:[0,4,1,""],heading:[0,4,1,""],incidence:[0,4,1,""],lats:[0,4,1,""],locx:[0,4,1,""],locy:[0,4,1,""],lons:[0,4,1,""],los_vector:[0,4,1,""],master:[0,4,1,""],satellite:[0,4,1,""],slave:[0,4,1,""],track:[0,4,1,""],update_local_coords:[0,2,1,""],update_los_vector:[0,2,1,""],utme:[0,4,1,""],utmn:[0,4,1,""],wrapped_phase:[0,4,1,""]},"heart.Parameter":{form:[0,4,1,""],lower:[0,4,1,""],name:[0,4,1,""],random:[0,2,1,""],testvalue:[0,4,1,""],upper:[0,4,1,""]},"heart.RectangularSource":{center:[0,5,1,""],dipvector:[0,5,1,""],length:[0,4,1,""],opening:[0,4,1,""],patches:[0,2,1,""],slip:[0,4,1,""],strikevector:[0,5,1,""],top_depth:[0,5,1,""],width:[0,4,1,""]},"heart.SeismicResult":{arrival_taper:[0,4,1,""],filtered_obs:[0,4,1,""],filtered_syn:[0,4,1,""],llk:[0,4,1,""],processed_obs:[0,4,1,""],processed_res:[0,4,1,""],processed_syn:[0,4,1,""],taper:[0,4,1,""]},"heart.TeleseismicTarget":{covariance:[0,4,1,""]},"models.GeometryOptimizer":{apply:[0,2,1,""],assemble_geodetic_results:[0,2,1,""],assemble_seismic_results:[0,2,1,""],built_hyper_model:[0,2,1,""],built_model:[0,2,1,""],get_synthetics:[0,2,1,""],update_llks:[0,2,1,""],update_weights:[0,2,1,""]},"plotting.PlotOptions":{dpi:[0,4,1,""],figure_dir:[0,4,1,""],force:[0,4,1,""],load_stage:[0,4,1,""],outformat:[0,4,1,""],plot_projection:[0,4,1,""],post_llk:[0,4,1,""],reference:[0,4,1,""],utm_zone:[0,4,1,""]},"pscmp.PsCmpArray":{end_distance_x:[0,4,1,""],end_distance_y:[0,4,1,""],n_steps_x:[0,4,1,""],n_steps_y:[0,4,1,""],start_distance_x:[0,4,1,""],start_distance_y:[0,4,1,""]},"pscmp.PsCmpConfig":{los_vector:[0,4,1,""],observation:[0,4,1,""],pscmp_outdir:[0,4,1,""],pscmp_version:[0,4,1,""],psgrn_outdir:[0,4,1,""],rectangular_source_patches:[0,4,1,""],times_snapshots:[0,4,1,""]},"pscmp.PsCmpConfigFull":{coulomb_master_field:[0,4,1,""],displ_filenames:[0,4,1,""],displ_sw_output_types:[0,4,1,""],gravity_filenames:[0,4,1,""],gravity_sw_output_types:[0,4,1,""],snapshot_basefilename:[0,4,1,""],stress_filenames:[0,4,1,""],stress_sw_output_types:[0,4,1,""],sw_coulomb_stress:[0,4,1,""],sw_los_displacement:[0,4,1,""],tilt_filenames:[0,4,1,""],tilt_sw_output_types:[0,4,1,""]},"pscmp.PsCmpCoulombStressMasterFault":{friction:[0,4,1,""],master_fault_dip:[0,4,1,""],master_fault_rake:[0,4,1,""],master_fault_strike:[0,4,1,""],sigma1:[0,4,1,""],sigma2:[0,4,1,""],sigma3:[0,4,1,""],skempton_ratio:[0,4,1,""]},"pscmp.PsCmpProfile":{end_distance:[0,4,1,""],n_steps:[0,4,1,""],start_distance:[0,4,1,""]},"pscmp.PsCmpRectangularSource":{dip:[0,4,1,""],length:[0,4,1,""],opening:[0,4,1,""],pos_d:[0,4,1,""],pos_s:[0,4,1,""],rake:[0,4,1,""],slip:[0,4,1,""],strike:[0,4,1,""],torigin:[0,4,1,""],update:[0,2,1,""],width:[0,4,1,""]},"pscmp.PsCmpScatter":{lats:[0,4,1,""],lons:[0,4,1,""]},"psgrn.PsGrnConfig":{max_time:[0,4,1,""],n_snapshots:[0,4,1,""],observation_depth:[0,4,1,""],psgrn_version:[0,4,1,""]},"psgrn.PsGrnConfigFull":{accuracy_wavenumber_integration:[0,4,1,""],displ_filenames:[0,4,1,""],earthmodel_1d:[0,4,1,""],gravity_filenames:[0,4,1,""],psgrn_outdir:[0,4,1,""],sampling_interval:[0,4,1,""],stress_filenames:[0,4,1,""],sw_gravity:[0,4,1,""],sw_source_regime:[0,4,1,""],tilt_filenames:[0,4,1,""]},"psgrn.PsGrnSpatialSampling":{end_distance:[0,4,1,""],n_steps:[0,4,1,""],start_distance:[0,4,1,""]},"utility.DataMap":{dtype:[0,4,1,""],list_ind:[0,4,1,""],shp:[0,4,1,""],slc:[0,4,1,""]},"utility.ListToArrayBijection":{f3map:[0,2,1,""],fmap:[0,2,1,""],rmap:[0,2,1,""],srmap:[0,2,1,""]},atmcmc:{ATMCMC:[0,1,1,""],ATMIP_sample:[0,3,1,""],init_stage:[0,3,1,""],logp_forw:[0,3,1,""]},backend:{ArrayStepSharedLLK:[0,1,1,""],BaseATMCMCTrace:[0,1,1,""],Text:[0,1,1,""],check_multitrace:[0,3,1,""],concatenate_traces:[0,3,1,""],dump:[0,3,1,""],get_highest_sampled_stage:[0,3,1,""],load:[0,3,1,""],load_sampler_params:[0,3,1,""]},config:{ATMCMCConfig:[0,1,1,""],BEATconfig:[0,1,1,""],GFConfig:[0,1,1,""],GeodeticConfig:[0,1,1,""],GeodeticGFConfig:[0,1,1,""],MetropolisConfig:[0,1,1,""],ProblemConfig:[0,1,1,""],SamplerConfig:[0,1,1,""],SamplerParameters:[0,1,1,""],SeismicConfig:[0,1,1,""],SeismicGFConfig:[0,1,1,""],init_config:[0,3,1,""],load_config:[0,3,1,""]},covariance:{get_geo_cov_velocity_models:[0,3,1,""],get_model_prediction_sensitivity:[0,3,1,""],get_seis_cov_velocity_models:[0,3,1,""],get_seismic_data_covariances:[0,3,1,""],sub_data_covariance:[0,3,1,""]},heart:{ArrivalTaper:[0,1,1,""],Covariance:[0,1,1,""],DiffIFG:[0,1,1,""],Filter:[0,1,1,""],GeodeticResult:[0,1,1,""],GeodeticTarget:[0,1,1,""],IFG:[0,1,1,""],Parameter:[0,1,1,""],RectangularSource:[0,1,1,""],SeismicResult:[0,1,1,""],TeleseismicTarget:[0,1,1,""],Trace:[0,1,1,""],adjust_fault_reference:[0,3,1,""],ensemble_earthmodel:[0,3,1,""],geo_construct_gf:[0,3,1,""],geo_layer_synthetics:[0,3,1,""],get_phase_arrival_time:[0,3,1,""],get_phase_taperer:[0,3,1,""],init_targets:[0,3,1,""],log_determinant:[0,3,1,""],seis_construct_gf:[0,3,1,""],seis_synthetics:[0,3,1,""],taper_filter_traces:[0,3,1,""],vary_model:[0,3,1,""]},inputf:{load_SAR_data:[0,3,1,""],load_and_blacklist_stations:[0,3,1,""],load_data_traces:[0,3,1,""]},metropolis:{Metropolis_sample:[0,3,1,""],get_final_stage:[0,3,1,""],get_trace_stats:[0,3,1,""]},models:{GeometryOptimizer:[0,1,1,""],load_model:[0,3,1,""],load_stage:[0,3,1,""],sample:[0,3,1,""]},plotting:{PlotOptions:[0,1,1,""],correlation_plot:[0,3,1,""],correlation_plot_hist:[0,3,1,""],draw_correlation_hist:[0,3,1,""],draw_posteriors:[0,3,1,""],geodetic_fits:[0,3,1,""],get_fit_indexes:[0,3,1,""],histplot_op:[0,3,1,""],n_model_plot:[0,3,1,""],plot:[0,3,1,""],plot_matrix:[0,3,1,""],seismic_fits:[0,3,1,""],select_metropolis_chains:[0,3,1,""],select_transform:[0,3,1,""],str_dist:[0,3,1,""],str_duration:[0,3,1,""],traceplot:[0,3,1,""]},pscmp:{PsCmpArray:[0,1,1,""],PsCmpConfig:[0,1,1,""],PsCmpConfigFull:[0,1,1,""],PsCmpCoulombStress:[0,1,1,""],PsCmpCoulombStressMasterFault:[0,1,1,""],PsCmpObservation:[0,1,1,""],PsCmpProfile:[0,1,1,""],PsCmpRectangularSource:[0,1,1,""],PsCmpScatter:[0,1,1,""],distributed_fault_patches_to_config:[0,3,1,""]},psgrn:{PsGrnConfig:[0,1,1,""],PsGrnConfigFull:[0,1,1,""],PsGrnSpatialSampling:[0,1,1,""]},theanof:{GeoLayerSynthesizerFree:[0,1,1,""],GeoLayerSynthesizerStatic:[0,1,1,""],SeisSynthesizer:[0,1,1,""]},utility:{DataMap:[0,1,1,""],ListArrayOrdering:[0,1,1,""],ListToArrayBijection:[0,1,1,""],adjust_point_units:[0,3,1,""],apply_station_blacklist:[0,3,1,""],biggest_common_divisor:[0,3,1,""],check_hyper_flag:[0,3,1,""],downsample_traces:[0,3,1,""],dump_objects:[0,3,1,""],ensure_cov_psd:[0,3,1,""],gather:[0,3,1,""],join_models:[0,3,1,""],load_objects:[0,3,1,""],lonlat_to_utm:[0,3,1,""],mod_i:[0,3,1,""],near_psd:[0,3,1,""],repair_covariance:[0,3,1,""],search_catalog:[0,3,1,""],setup_logging:[0,3,1,""],split_off_list:[0,3,1,""],split_point:[0,3,1,""],transform_sources:[0,3,1,""],update_source:[0,3,1,""],utm_to_loc:[0,3,1,""],utm_to_lonlat:[0,3,1,""],weed_data_traces:[0,3,1,""],weed_input_rvs:[0,3,1,""],weed_stations:[0,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:staticmethod"},terms:{"0x4757d10":[],"0x48a5e50":[],"0x4ce1350":[],"0x4d233d0":0,"0x4d80950":[],"0x4dd00d0":[],"0x50a3e10":[],"0x50bde50":[],"0x51ed3d0":[],"0x52c6d50":[],"0x52e17d0":[],"0x57e6190":[],"0x57e61d0":[],"0x57e6390":[],"0x57e6dd0":[],"0x57e9250":[],"0x5847110":[],"0x5847150":[],"0x5847310":[],"0x5847d50":[],"0x58491d0":[],"0x5a2be50":[],"0x5dbb410":[],"0x5dbb450":[],"0x5dbb610":[],"0x5dbd090":[],"0x5dbd4d0":[],"0x5e15750":[],"0x5e15790":[],"0x5e15990":[],"0x5e17590":[],"0x5e17a50":[],"0x5e17a90":[],"0x5e1de50":[],"0x5e567d0":0,"0x5e56810":0,"0x5e56a10":0,"0x5e58610":0,"0x5e58ad0":0,"0x5e58b10":0,"0x5e93190":[],"0x5e931d0":[],"0x5e933d0":[],"0x5e93f90":[],"0x5e94490":[],"0x5e944d0":[],"0x6028090":[],"0x60280d0":[],"0x6028290":[],"0x6028cd0":[],"0x602a150":[],"0x6062110":[],"0x6062150":[],"0x6062310":[],"0x6062d50":[],"0x60641d0":[],"0x6265050":[],"0x6265090":[],"0x6266050":[],"0x6266250":[],"0x6266c90":[],"0x6267110":[],"0x62b7d10":[],"0x63227d0":[],"0x6322810":[],"0x6322a10":[],"0x6324610":[],"0x6324ad0":[],"0x6324b10":[],"0x64f5350":[],"0x658e9d0":[],"0x66b9e10":[],"0x66dae10":[],"0x69d0110":[],"0x69d0150":[],"0x69d0310":[],"0x69d0d50":[],"0x69d21d0":[],"0x6ced890":[],"0x6dc1110":[],"0x6dc1150":[],"0x6dc1310":[],"0x6dc1d50":[],"0x6dc31d0":[],"0x72a4110":[],"0x72a44d0":[],"0x73082d0":[],"0x73ef4d0":[],"0x73ef510":[],"0x73ef690":[],"0x74199d0":[],"0x7436a10":[],"0x7436a50":[],"0x7436bd0":[],"0x74f3650":[],"0x74f3a10":[],"0x74f8190":[],"0x757a190":[],"0x757a1d0":[],"0x757a350":[],"0x757ad90":[],"0x765b0d0":[],"0x765b110":[],"0x765b2d0":[],"0x765bd10":[],"0x765d190":[],"0x767d0d0":[],"0x767d110":[],"0x767d2d0":[],"0x767dd10":[],"0x767f190":[],"0x7814890":[],"0x7da00d0":[],"0x7da0b10":[],"0x7da0ed0":[],"0x7da1ed0":[],"0x7da1f10":[],"0x8383190":[],"0x83c1d50":[],"0x83c1d90":[],"0x83c1f10":[],"0x83c2990":[],"0x83c2d50":[],"0x8406190":[],"0x84061d0":[],"0x8406350":[],"0x8406d90":[],"0x857e210":[],"0x857e250":[],"0x857e410":[],"0x857ee50":[],"0x85832d0":[],"0x88cc090":[],"0x88cc0d0":[],"0x88cc250":[],"0x88ccc90":[],"0x88ce090":[],"0x8b0b790":[],"0x8b0b890":[],"0x8b0bf90":[],"0x8bbb910":0,"0x8bbbc10":0,"0x9370938":[],"0x9370a28":[],"0x93741b8":[],"0x9419410":[],"0x9419590":[],"0x9419cd0":[],"0x950b650":[],"0x950b790":[],"0x950bed0":[],"0x96fe050":[],"0x98e1ed8":[],"0x9907610":[],"0x9914d50":[],"0x9914e90":[],"0x99bdb00":[],"0x99c7c10":[],"0x99c8350":[],"0x9a06810":[],"0x9a06f10":[],"0x9c461b8":0,"0x9c462a8":0,"0x9c469b0":0,"0x9c6fab8":[],"0x9c76250":[],"0x9c76950":[],"0x9caa320":[],"0x9cab8d0":[],"0x9cabfd0":[],"0x9d17490":[],"0x9d175d0":[],"0x9d17d10":[],"0x9d3a610":[],"0x9d3a750":[],"0x9d3ae90":[],"0x9d553d0":0,"0x9f03f10":[],"0x9f05090":[],"0x9f057d0":[],"0x9f37350":[],"0x9f374d0":[],"0x9f37c10":[],"0xa12e290":[],"0xa12e990":[],"0xa152d40":[],"0xa1ac140":[],"0xa1ac230":[],"0xa1ac938":[],"0xa362050":[],"0xa40b518":[],"0xa40bfd0":[],"0xa40f150":[],"0xa40f890":[],"0xa5be140":[],"0xa629f50":[],"0xa69c690":[],"0xa69c7d0":[],"0xa69cf10":[],"0xa6b81b8":[],"0xa6b82a8":[],"0xa6b89b0":[],"0xa72b850":[],"0xa72bf50":[],"0xa8660c8":[],"0xaa9c650":[],"0xaa9c790":[],"0xaa9ced0":[],"0xab353b0":[],"0xab368d0":[],"0xab36fd0":[],"0xae12f50":[],"0xafac0e0":[],"0xb012ed8":[],"0xb3333d0":[],"0xb333510":[],"0xb333c50":[],"0xb3533d0":[],"0xb353510":[],"0xb353c50":[],"0xbc80140":[],"0xbc82910":[],"0xbc89090":[],"0xbc891d0":[],"0xbce0050":[],"0xce80aa0":[],"1st":0,"2006a":[],"2008a":0,"2204460492503131e":0,"28asce":[],"boolean":0,"case":[0,3],"class":0,"default":[0,3],"export":3,"final":[0,3],"float":0,"function":[],"import":0,"int":0,"long":[3,4],"new":[0,3],"return":0,"short":[],"static":[0,3],"throw":0,"true":[0,3],"var":0,a_list:0,abgl:0,abl:0,about:[0,3],absolut:0,accept:0,access:3,accord:[0,3],accur:0,accuraci:0,accuracy_wavenumber_integr:0,acquisit:0,activ:[],actual:3,adapt:0,adaptiv:0,add:[0,3],addit:0,addition:0,adjust:0,adjust_fault_refer:0,adjust_point_unit:0,admin:3,advi:0,after:[0,3,4],afterward:0,again:3,against:3,ak135:0,algebra:0,algorithm:[0,3],alia:0,all:[0,3],allow:3,almost:0,alpha:0,alreadi:3,also:[0,1,3],altern:[0,3],although:3,alwai:0,amdlibm:3,amount:1,amplitud:0,angl:0,ani:[0,3],anoth:1,any:0,appli:0,applic:[0,3],apply_station_blacklist:0,approxim:[0,1],apt:3,arg:0,argument:0,around:[0,3],arrai:0,array_lik:[],array_popul:0,arraystepshar:0,arraystepsharedllk:0,arriv:0,arrival:0,arrival_tap:0,arrivaltap:0,asarrai:[],asce:0,ascelibrari:[],assembl:0,assemble_geodetic_result:0,assemble_seismic_result:0,atlas:3,atmcmcconfig:0,atmip:0,atmip_sampl:0,attribut:0,august:0,author:[0,1],autokiwi:0,autoreconf:[3,4],avail:3,averag:0,awar:0,axi:0,backtransform:0,bar:0,base:[0,3],baseatmcmctrac:0,bash:3,bashrc:3,bathk:[0,1],bayesian:[0,3],beat:[],beat_log:0,beatconfig:0,beck:0,been:0,befor:0,begin:0,beimplement:0,belong:0,below:[0,1,3],beta:0,between:0,biggest:0,biggest_common_divisor:0,bin:[0,3],bit:3,bla:3,blacklist:0,bleed:3,block:0,bool:0,boolen:0,boost:3,both:3,bound:0,boundari:0,branch:3,build:[0,3],buildin:[],built:0,built_hyper_model:0,built_model:0,builtin_model:0,burn:0,c_include_path:3,cake:0,calc_beta:0,calc_covari:0,calc_data_cov:0,calcul:[],calculate_model_prediction_sensit:0,callabl:0,can:[0,1,3,4],cannot:3,card:3,carlo:0,cascad:0,catalog:0,cauchi:0,caus:1,center:0,center_depth:0,central:0,certain:[],cfg:3,chain:0,chain_previous_lpoint:0,chang:[0,3,4],channel:0,characterist:0,check:[],check_bnd:0,check_bound:0,check_hyper_flag:0,check_multitrac:0,checkout:3,chen:0,ching2007:0,ching:0,choose_propos:[],chop:0,circl:0,cleaner:3,clone:[3,4],closest:0,cmap:0,cnmem:3,code:[0,3,4],coef_vari:0,coeffici:0,coher:0,coleski:0,color:0,colormap:0,column:0,com:[0,3,4],combin:0,come:0,common:0,compar:1,comparison:0,compil:[0,3,4],complet:0,compon:0,compris:0,comput:[0,3],computation:0,concaten:0,concatenate_trac:0,conf:3,configur:[0,3,4],congratul:3,consist:0,contain:[0,3],content:2,context:0,continu:0,contradict:0,convent:0,convert:0,convinc:3,cool:0,coordin:0,copi:[],core:0,corner:0,correl:0,correlation_plot:0,correlation_plot_hist:0,correspond:0,cosin:0,cost:0,costap:0,could:3,coulomb_master_field:0,count:0,cours:0,cov:0,cover:0,creat:[0,3],crust2:0,crust2model:0,crust:[0,1],crust_ind:0,crustal:[0,1],crustal_model:0,cshrc:3,csv:0,cuda:3,cuda_lib:3,cuda_root:3,cudandarraytyp:3,cudnn:3,current:[0,3],custom:0,custom_path:3,custom_velocity_model:0,cut:0,cycl:0,cylind:0,cython:3,dai:0,data:[0,1],data_trac:0,dataand:0,databas:0,datadir:0,datamap:0,dataset:0,datatyp:0,date:0,dateset:0,dayrang:0,dcsourc:0,decid:3,decim:0,decomposit:0,decreas:0,deep:3,deepcopi:[],deeper:0,deeplearn:[],def:0,default_output:0,defaultmak:0,defin:0,definit:0,deform:1,deg:0,delet:0,deltat:0,densiti:0,depend:[0,3],dependend:0,depth:0,depth_limit_vari:0,deriv:0,design:3,detail:[],determin:0,determinist:0,determinsit:0,dev:3,develop:3,devic:3,diagon:0,dict:0,dictionari:0,did:3,diff_ifg:0,differ:[0,3],differenti:0,diffifg:0,dike:0,dimens:0,dimension:0,dip:0,dipvector:0,direct:[0,3],directori:[0,3],disabl:3,discard:0,discontinu:0,discret:0,disloc:1,disp:[],displ_filenam:0,displ_sw_output_typ:0,displac:0,displai:[0,3],dist:0,distanc:0,distribut:[0,3],distributed_fault_patches_to_config:0,divisor:0,doe:[0,3],doi:[],done:3,dont:3,dot:3,download:3,downsampl:0,downsample_trac:0,dpi:0,draw:0,draw_correlation_hist:0,draw_posterior:0,dtype:0,due:0,dummy_for:0,dump:0,dump_object:0,duputel:0,each:[0,3,4],earth:[0,1],earth_model:0,earthmod:0,earthmodel:0,earthmodel_1d:0,earthmodelwith:0,earthquak:[0,1],easi:3,east:0,east_shift:0,easy_instal:3,edg:[0,3],edit:[0,3],effici:[0,3],eigendecomp:3,eigenvalu:0,eigval:0,either:[0,1,3],elemantari:3,element:0,elementary:3,elemwis:3,els:3,empti:0,enabl:[0,3],end:0,end_dist:0,end_distance_i:0,end_distance_x:0,eng:0,engin:0,engine:0,engineer:[],enough:0,ensembl:0,ensemble_earthmodel:0,ensur:0,ensure:0,ensure_cov_psd:0,environ:3,envisat:0,epsilon:0,equidist:0,equval:0,ergo:3,err_depth:0,err_veloc:0,error:0,especi:0,estim:[0,1],estimat:0,etc:3,evalu:0,evaluat:0,even:3,event:0,everi:0,everybodi:3,everyon:3,everyth:3,examin:0,exampl:[0,1,3],execut:0,exist:0,exp:[0,3],expect:0,exponenti:0,extens:3,extension:0,f3map:0,f77:[3,4],factor:[0,3],fade:0,fals:[0,3],far:[0,3,4],fast:[0,1],fast_run:3,fastmath:3,fault:0,feasibl:0,fflags:[3,4],fgraph:[],field:0,fig:0,figsiz:0,figur:0,figure_dir:0,filenam:0,filter:0,filtered_ob:0,filtered_syn:0,find:[0,3],fine:[0,3],finish:0,finit:0,first:[3,4],flag:[0,3,4],float32:3,float64:3,floatx:3,fluid:1,fmap:0,folder:[0,3,4],follow:[0,3,4],follw:[],fomosto:[3,4],forc:0,form:0,fortran:3,forward:[0,3],found:[3,4],fraction:0,framework:[0,3,4],frequenc:0,friction:0,from:[0,1,3],full:0,fullc:0,func:0,futur:[0,3,4],gain:3,gather:0,gaussian:0,gcmt:0,gener:[],geo:[],geo_construct_gf:0,geo_layer_synthet:0,geodet:[],geodetic_config:0,geodetic_fit:0,geodeticconfig:0,geodeticgfconfig:0,geodeticresult:0,geodetictarget:0,geolayersynthesizerfre:0,geolayersynthesizerstat:0,geometri:[0,1],geometryoptim:0,geophys:0,geophysicist:1,get:[],get_chain_previous_lpoint:0,get_final_stag:0,get_fit_index:0,get_geo_cov_velocity_model:0,get_highest_sampled_stag:0,get_invers:[],get_inverse_d:[],get_inverse_p:[],get_model_prediction_sensit:0,get_phase_arrival_tim:0,get_phase_taper:0,get_seis_cov_velocity_model:0,get_seismic_data_covari:0,get_synthet:0,get_trace_stat:0,get_valu:0,gf_config:0,gfconfig:0,gfortran:[3,4],gfz:[],gilbert:0,git:[3,4],github:[3,4],given:0,gji:0,global:[0,3],global_model:0,gps:[0,1],gpu_test:3,gpuelemwis:3,grad:0,gradient:0,graph:0,graphic:3,gravity_filenam:0,gravity_sw_output_typ:0,greater:0,green:[],greensfunct:[0,3,4],grid:0,gridlin:0,grond:0,group:0,gut:0,had:[3,4],halfspac:0,handl:[0,1],hann:[0,1],hardcod:0,hardwar:3,have:[0,3],haven:3,head:0,heavi:3,help:3,here:[0,3,4],high:0,higher:0,hist_color:0,histogram:0,histplot_op:0,hold:0,home:3,homedir:0,homedirectori:3,homepath:0,horizont:0,hostfromgpu:3,how:3,howev:3,html:[],http:[3,4],hunseblog:[],hvasbath:[3,4],hyper:0,hyper_sampl:0,hyper_sampler_config:0,hyperparamet:0,ident:0,identifi:0,idx:0,ifg:0,imag:0,implement:0,importanc:0,inch:0,incid:0,includ:[0,3,4],include_dir:3,incomplet:0,increas:[0,3],index:[0,2],indic:0,indirectli:0,inform:0,init_config:0,init_sampl:0,init_stag:0,init_target:0,initalis:0,initi:0,initial:0,initialis:0,initiat:0,inplac:0,input:0,input_depth:0,input_rv:0,insar:1,inspect:0,instal:[3,4],install_detail:[],installat:[],instanc:0,instead:0,instruct:[],integ:0,integer:[],intend:3,intens:3,interest:1,interferogram:0,intermedi:0,intern:0,internat:0,interpol:0,interpret:0,interv:0,introduct:[],intyp:0,invers:0,inverse_d:0,inverse_p:0,invert:0,involv:0,isinst:[],iter:0,itself:3,jaekel:0,januari:0,johnwittenau:[],join_model:0,joined_model:0,journal:0,juli:0,just:0,keep:[0,3,4],keep_tmp:0,kei:0,kept:0,kernel:0,kinemat:[0,3],kinherd:[],kitagawa:0,known:1,kwarg:0,label:0,lambda:0,lapack:3,lapack_lib:3,laplac:0,larg:[0,3,4],larger:0,last:[0,3],lat:0,later:0,latitud:0,latlon:0,latter:[],layer:0,layeredmodel:0,ld_library_path:3,ldconfig:3,ldflag:3,learn:3,least:[0,3],length:0,level:0,levelnam:0,lgfortran:3,lib64:3,lib:3,libc:3,librari:3,library_dir:3,library_path:3,like:[0,1,3],likelihood:0,likelihood_nam:0,limit:0,lin64:3,line:[0,3],linear:0,link:[0,3],linux:3,list:0,list_arrai:0,list_ind:0,listarrayord:0,listtoarraybiject:0,llk:0,load:0,load_and_blacklist_st:0,load_atmip_param:[],load_config:0,load_data_trac:0,load_model:0,load_object:0,load_sampler_param:0,load_sar_data:0,load_stag:0,loadpath:0,loc:0,local:[0,3],localengin:0,locat:0,loci:0,locx:0,log:[0,3],log_determin:0,log_norm_factor:0,logarithm:0,logfil:0,logp_forw:0,lon:0,longitud:0,lonlat_to_utm:0,look:0,loop:3,lopenbla:3,los:0,los_vector:0,low:0,lower:0,lower_corn:0,lpoint:0,machin:[0,3],magma:1,magnitud:0,mai:1,main:[],main_path:0,make:[0,3,4],maker:[],mani:[0,1,3],mantl:0,manual:[0,3,4],map:[0,1],march:0,marcov:0,margin:0,mark:0,marker:0,markov:0,master:0,master_fault_dip:0,master_fault_rak:0,master_fault_strik:0,matplotlib:0,matric:[0,3],matrix:[0,3],max:0,max_tim:0,maximum:0,mcmc:0,mcmodel:[3,4],mean:0,mean_end_point:0,mech:0,mechan:[],medium:0,mention:3,meta:0,method:0,metropoli:[],metropolis_sampl:0,metropolisconfig:0,might:1,min:0,min_magnitud:0,minimum:0,minson2013:0,minson:0,misfit:0,miss:[3,4],mod_i:0,mode:[0,3],modifi:0,modulu:0,mont:0,moonei:0,more:0,most:3,movement:1,mpoint:0,mtime:[],mtrace:0,much:3,multilinear:0,multipl:[0,3],multitrac:0,multivari:0,multivariatenorm:0,multivariatenormalpropos:[],mutlitrac:0,mvnpd:0,myself:3,n_chain:0,n_fault:0,n_job:0,n_model_plot:0,n_observ:0,n_point:0,n_snapshot:0,n_stage:0,n_step:0,n_steps_i:0,n_steps_x:0,n_variat:0,name:0,natur:0,nbin:0,ndarrai:0,near_cov:0,near_psd:0,nearest:0,nearest_neighbor:0,necessari:0,need:[0,3,4],needs:0,neg:0,net:[],network:[],next:[0,3],no_inplac:3,nois:0,non:0,none:0,normal:0,normalis:0,north:0,north_shift:0,note:0,now:3,nproc:0,nth:0,nuber:0,num:0,num_vari:0,number:[0,3,4],numer:[],numpi:[],numpy_test:3,nvcc:3,nvdidia:3,nvidia:3,nworker:0,object:0,observ:[0,1],observat:0,observation_depth:0,obsolet:[],odw:0,ofeach:[],off:0,off_length:0,often:1,once:0,onli:[3,4],only:[0,3],open:0,openblas:3,openblas_lib:3,opencl:3,oper:[0,3],optim:[0,3],optimiz:0,option:[0,3],optional:[],orang:0,order:0,org:[],origin:[0,3,4],other:0,otherwis:0,out:[0,3],out_var:0,outformat:0,outindex:0,outlist:0,outmod:0,outparam_list:[],outpath:0,output:0,outsid:0,over:[0,3],overal:0,overarch:0,overlap:0,overplot:0,overwrit:0,oxfordjourn:[],packag:[],packeg:[],page:2,pair:0,parallel:0,parallelis:0,param:0,paramet:[0,1],part:[0,3,4],partial:0,past:[],patch:0,path:[0,3],pdf:0,per:[0,3],percent:0,perform:[],period:0,phase:0,physic:[],pickl:0,pickleabl:[],pickleabletrac:[],pip:[3,4],place:0,placehold:0,plan:[3,4],planar:0,plate:1,pleas:3,plot_all_posterior:[],plot_flag:[],plot_matrix:0,plot_opt:0,plot_project:0,plotoption:0,png:[],point:[0,3,4],point_color:0,point_siz:0,point_styl:0,poisson:0,popul:0,pos_:0,pos_d:0,posit:[0,1],possibl:[0,1,3],post:0,post_llk:0,posterior:0,postiv:0,potsdam:[],pre:0,precis:0,preciss:0,pred_g:0,pred_v:0,predict:0,prefer:3,prefix:[0,3],prerequisit:[],previou:0,previous:[0,3],print:0,prior:0,prior_alpha:0,prior_styl:0,problem:0,problem_config:0,problemconfig:0,process:[0,3],processed_ob:0,processed_r:0,processed_syn:0,processor:0,product:[],profil:0,progress:0,progressbar:0,project:0,project_dir:0,properti:0,propos:0,proposal_dist:0,proposal_nam:0,provid:[0,3],pscmp_outdir:0,pscmp_version:0,pscmparrai:0,pscmpconfig:0,pscmpconfigful:0,pscmpcoulombstress:0,pscmpcoulombstressmasterfault:0,pscmpobservat:0,pscmpprofil:0,pscmprectangularsourc:0,pscmpscatter:0,psgrn_function:0,psgrn_green:0,psgrn_outdir:0,psgrn_version:0,psgrnconfig:0,psgrnconfigful:0,psgrnspatialsampl:0,pymc3:[],pymc:3,pyproj:[],pyrocko:[],python2:3,python:[3,4],qsei:0,qseis2d:0,qseis:[0,3,4],qssp:[0,3,4],quadrat:0,quadro:3,radial:0,radiu:0,rake:0,rand:[],random:0,random_se:0,randomst:[],rang:0,rate:0,rather:3,read:0,realis:0,realli:3,rebonato:0,recent:3,recogn:3,recommend:0,record:0,rectangular:[0,1],rectangular_source_patch:0,rectangularsourc:0,red:0,ref_earthmod:0,refer:[],reference_point:0,reference_tap:0,reference_taper:0,reference_valu:0,reimplement:3,relat:[0,3],releas:3,relev:[0,3],reli:[3,4],reload:0,remov:0,repackag:[3,4],repair_covari:0,repeat:0,repeatedli:0,repeatetli:0,repetit:0,replac:0,replace_wat:0,repositori:[0,3,4],repres:0,represent:0,request:0,requir:[0,3,4],resampl:0,residu:0,resolut:0,resolv:0,respect:[0,3],rest:0,restart:3,result:[0,3,4],result_fold:0,retriev:0,retun:[],return_fin:0,right:3,rm_flag:0,rm_gf:0,rmap:0,rng:[],rongjiang:[3,4],root:3,rot:0,rotat:0,row:0,run:[0,3,4],same:0,sampl:0,sample_r:0,sampler:0,sampler_config:0,samplerconfig:0,samplerparamet:0,sampling_interv:0,sandbox:[],sar:0,satellit:0,save:0,scalar:0,scale:0,scatter:0,script:[3,4],search:[0,2],search_catalog:0,second:3,section:3,see:0,seed:0,sei:[],seis_construct_gf:0,seis_synthet:0,seismic:[],seismic_config:0,seismic_fit:0,seismicconfig:0,seismicgfconfig:0,seismicresult:0,seismogram:0,seismolog:3,seismos:0,seismpsiz:0,seissynthes:0,select:0,select_end_point:0,select_metropolis_chain:0,select_transform:0,select_vari:0,semi:0,sensit:0,separ:0,seper:0,servic:[],set:[0,3],setup:[],setup_log:0,shallow:0,shape:0,share:0,shift:0,shortest:0,should:[0,3],show:0,shown:0,shp:0,sigma1:0,sigma2:0,sigma3:0,sigma:0,signific:[0,3],significantli:0,sill:0,similar:[0,3],simon:0,simpl:0,simpler:0,simul:0,sinc:0,singl:0,site:3,size:0,skempton_ratio:0,slave:0,slc:0,slip:0,slow:0,small:0,smi:3,snapshot:0,snapshot_basefilenam:0,snuffler:0,softwar:[],solut:0,solv:0,some:[0,3],someth:3,sometim:0,somewhat:3,soon:0,sort:0,sourc:[],source_depth_max:0,source_depth_min:0,source_depth_spac:0,source_distance_max:0,source_distance_min:0,source_distance_radiu:0,source_distance_spac:0,source_param:0,source_parm:0,source_point:0,spacc:0,space:0,specif:0,specifi:0,speed:[0,3],speedup:3,spent:3,split:0,split_off_list:0,split_point:0,src:[3,4],srmap:0,srr:0,srt:0,sta:[],stabl:3,stacked_trac:0,staff:[],stage:0,stage_numb:0,stage_posterior:[],standard:[0,3],start:[],start_dist:0,start_distance_i:0,start_distance_x:0,stat:3,station:[0,1],steeper:0,step:[0,3],step_method:0,stepsaltern:0,stf:0,still:0,stop:0,store:[0,3],store_superdir:0,str:0,str_dist:0,str_durat:0,straight:3,strang:0,stress_filenam:0,stress_sw_output_typ:0,strike:0,strikevector:0,string:0,structur:0,stt:0,studi:1,style:0,stz:0,sub:0,sub_data_covari:0,subcovari:0,subplot:0,sudo:[3,4],summar:3,support:3,sure:3,surfac:[0,1],svd:3,sw_coulomb_stress:0,sw_graviti:0,sw_los_displac:0,sw_source_regim:0,symbol:0,symmetr:0,synthet:[],system:[3,4],szr:0,szz:0,take:0,taken:0,taper:0,taper_filter_trac:0,tar:[3,4],target:0,tarrai:0,tecton:1,tediou:3,teleseism:0,teleseismictarget:0,tell:3,temper:0,tempor:0,tensor:0,tensortyp:3,term:3,test:[0,3],testvalu:0,text:0,than:[0,3],theano:[],theano_flags:3,theanorc:3,thedataset:0,thei:0,theintermedi:0,them:0,theori:0,therefor:[0,3],thi:[0,3,4],thin:0,thread:[],three:0,threshold:0,through:[],thrown:0,thu:[0,3],tilt_filenam:0,tilt_sw_output_typ:0,time:[0,3,4],times_snapshot:0,tmax:[],tmin:0,tmp:0,took:3,tool:3,toolkit:3,top:0,top_depth:0,toposort:[],torigin:0,total:3,trace:0,traceplot:0,track:0,transform:0,transform_sourc:0,transit:0,transvers:0,travel:0,triangular:0,troubleshoot:3,tune:0,tune_interv:0,tupl:0,two:[0,3],txt:0,typ:0,type:[0,1,3],tzero:0,uncertainti:0,unchang:0,under:0,undocument:0,unifi:0,uniform:0,unit:[0,3],unix:[3,4],unlik:0,unobserved_rv:0,unobservedrv:0,unpack:[3,4],unpickl:0,unstack:0,until:0,unwrapped_phas:0,updat:0,update:0,update_covari:0,update_hyp:0,update_llk:0,update_local_coord:0,update_los_vector:0,update_sourc:0,update_weight:0,upper:0,upper_corn:0,use_crust2:0,use_custom:0,used:3,using:3,usr:3,utm:0,utm_to_loc:0,utm_to_lonlat:0,utm_zon:0,utmi:0,utmn:0,utmx:0,uwifg:0,valid:0,validate_hyp:0,validate_prior:0,valu:0,varbin:0,vari:0,variabl:[0,3],varianc:0,variat:0,variou:[0,3],varnam:0,vary_model:0,vasyura:[0,1],vector:[0,3],veloc:0,verca:0,veri:[0,3],version:0,vertic:0,vice:0,vlen:[],volcano:1,wang:[3,4],want:[0,3],water:0,wave:0,waveform:[0,1],webpag:[3,4],websit:3,weed:0,weed_data_trac:0,weed_input_rv:0,weed_stat:0,weeded_data_trac:0,weeded_input_rv:0,weeded_st:0,weight:0,well:[0,3],what:0,where:[0,3],whereev:[3,4],whether:[0,3],which:[0,3],white:0,whole:0,why:3,wide:0,width:0,window:[3,4],wise:0,within:[0,3,4],without:[0,3],wont:0,woodward:0,wordpress:[],work:[0,3],worth:3,wrap:0,wrapped_phas:0,wrapper:0,write:0,written:[3,4],www:[],xianyi:3,xvfz:3,xvzf:[3,4],y__0_0:0,y__0_1:0,y__1_0:0,y__1_1:0,y__2_0:0,y__2_1:0,yaml:0,ydata:[],you:[3,4],your:3,yyyy:0,zero:0,zone:0},titles:["API Reference","Getting started with BEAT","Welcome to beat&#8217;s documentation!","Detailed Installation instructions","Short Installation instructions"],titleterms:{"function":[3,4],"short":4,api:0,atmcmc:0,backend:0,beat:[1,2,3],calcul:[3,4],check:3,config:0,covari:0,cpu:3,detail:3,document:2,file:0,format:0,gener:3,geodet:[3,4],get:1,gpu:3,green:[3,4],heart:0,indice:2,inputf:0,installat:[3,4],instruct:[3,4],introduct:1,libamdm:3,main:3,metropoli:0,model:0,modul:0,numer:3,numpi:3,openbla:3,optional:3,packag:3,perform:3,plot:0,prerequisit:3,pscmp:0,psgrn:0,pymc3:3,pyproj:3,pyrocko:3,refer:0,seismic:[3,4],setup:3,sourc:3,start:1,synthet:[3,4],tabl:2,theano:3,theanof:0,util:0,welcom:2}})